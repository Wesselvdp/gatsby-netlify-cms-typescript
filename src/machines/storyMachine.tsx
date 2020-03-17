import { Machine } from 'xstate'

interface ShifterStates {
  states: {
    start: {}
    middle: {}
    end: {}
  }
}

type ShiftMachineEvents =
  | { type: 'NEXT' }
  | { type: 'PREVIOUS' }
  | { type: 'DIRECT'; page: number }

interface ShifterContext {
  currentPage: number
}

// This machine is completely decoupled from React
export const toggleMachine = Machine<
  ShifterContext,
  ShifterStates,
  ShiftMachineEvents
>({
  id: 'shifter',
  initial: 'start',
  context: {
    currentPage: 0,
  },
  states: {
    start: {
      on: { NEXT: 'middle' },
    },
    middle: {
      on: {},
    },
    last: {
      on: { NEXT: 'inactive' },
    },
  },
})
