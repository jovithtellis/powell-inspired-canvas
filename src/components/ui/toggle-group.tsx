
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1 relative overflow-hidden", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

interface ToggleGroupState {
  prevActiveIndex: number | null;
  activeIndex: number | null;
}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)
  const [isOn, setIsOn] = React.useState(props["data-state"] === "on")
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  
  // Access the parent context to track button positions
  const toggleGroupState = React.useContext(ToggleGroupStateContext)
  const index = React.useRef<number | null>(null)
  
  // On first render, get the index of this button within the toggle group
  React.useEffect(() => {
    if (buttonRef.current && buttonRef.current.parentElement) {
      const buttons = Array.from(buttonRef.current.parentElement.children)
      index.current = buttons.indexOf(buttonRef.current)
    }
  }, [])
  
  React.useEffect(() => {
    const newState = props["data-state"] === "on"
    if (isOn !== newState) {
      setIsOn(newState)
      
      if (newState && index.current !== null && toggleGroupState) {
        // When this button becomes active
        toggleGroupState.setActiveIndex(index.current)
      }
    }
  }, [props["data-state"], isOn, toggleGroupState])

  return (
    <ToggleGroupPrimitive.Item
      ref={(node) => {
        // Merge refs
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
        buttonRef.current = node
      }}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "relative z-10 border border-gray-700 hover:border-gray-500 transition-colors",
        isOn && "text-white",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

// Create a context to track toggle group state
const ToggleGroupStateContext = React.createContext<{
  prevActiveIndex: number | null;
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
} | null>(null)

// Wrapper component to provide toggle group state
const AnimatedToggleGroup: React.FC<React.ComponentPropsWithoutRef<typeof ToggleGroup>> = ({
  children,
  ...props
}) => {
  const [state, setState] = React.useState<ToggleGroupState>({
    prevActiveIndex: null,
    activeIndex: null
  })
  
  const setActiveIndex = React.useCallback((index: number) => {
    setState(prev => ({
      prevActiveIndex: prev.activeIndex,
      activeIndex: index
    }))
  }, [])
  
  const [highlightStyle, setHighlightStyle] = React.useState({
    left: '0',
    right: '100%',
    opacity: 0
  })
  
  React.useEffect(() => {
    const root = document.querySelector('[role="group"]') as HTMLElement
    if (!root) return
    
    if (state.activeIndex !== null) {
      const buttons = Array.from(root.children) as HTMLElement[]
      if (buttons[state.activeIndex]) {
        const activeBtn = buttons[state.activeIndex]
        const rect = activeBtn.getBoundingClientRect()
        const rootRect = root.getBoundingClientRect()
        
        // Calculate position relative to the toggle group
        const left = (rect.left - rootRect.left) + 'px'
        const width = rect.width + 'px'
        
        // If there's a previous active index, animate from there
        if (state.prevActiveIndex !== null) {
          const prevBtn = buttons[state.prevActiveIndex]
          const prevRect = prevBtn.getBoundingClientRect()
          
          // Animate from previous position to new position
          const prevLeft = prevRect.left - rootRect.left
          const currentLeft = rect.left - rootRect.left
          
          // Determine direction and animate accordingly
          if (prevLeft < currentLeft) {
            // Moving right
            setHighlightStyle({
              left: prevLeft + 'px',
              width: (currentLeft - prevLeft + rect.width) + 'px',
              opacity: 1
            })
            
            // Then animate to final position
            setTimeout(() => {
              setHighlightStyle({
                left,
                width,
                opacity: 1
              })
            }, 200)
          } else {
            // Moving left
            setHighlightStyle({
              left: currentLeft + 'px',
              width: (prevLeft - currentLeft + prevRect.width) + 'px',
              opacity: 1
            })
            
            // Then animate to final position
            setTimeout(() => {
              setHighlightStyle({
                left,
                width,
                opacity: 1
              })
            }, 200)
          }
        } else {
          // No previous state, just set directly
          setHighlightStyle({
            left,
            width,
            opacity: 1
          })
        }
      }
    }
  }, [state.activeIndex, state.prevActiveIndex])

  return (
    <ToggleGroupStateContext.Provider value={{ ...state, setActiveIndex }}>
      <div className="relative">
        {/* Moving highlight background */}
        <div 
          className="absolute z-0 h-full bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded transition-all duration-300"
          style={{
            left: highlightStyle.left,
            width: highlightStyle.width,
            opacity: highlightStyle.opacity
          }}
        />
        
        <ToggleGroup {...props}>
          {children}
        </ToggleGroup>
      </div>
    </ToggleGroupStateContext.Provider>
  )
}

export { ToggleGroup, ToggleGroupItem, AnimatedToggleGroup }
