"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type ComboboxItem = {
  type: string
}

interface ComboboxProps {
  data: ComboboxItem[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function Combobox({data, value, onChange, placeholder = "..."}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [input, setInput] = React.useState("");

  const filtered = data.filter((data) =>
    data.type.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? data.find((item) => item.type === value)?.type ?? value
            : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[calc(100vw-2rem)] max-w-50 mx-4 p-0">
        <Command>
          <CommandInput className="h-9" value={input} onValueChange={setInput} />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {filtered.map((item) => (
                <CommandItem
                  key={item.type}
                  value={item.type}
                  onSelect={(currentValue) => {
                    onChange(currentValue)
                    setOpen(false)
                  }}
                >
                  {item.type}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.type ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}

              {filtered.length === 0 && input && (
                <CommandItem
                  value={input}
                  onSelect={() => {
                    onChange(input)
                    setOpen(false);
                  }}
                >
                  {input}
                </CommandItem>
              )}
              
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
