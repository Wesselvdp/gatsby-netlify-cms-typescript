import { Machine, assign } from 'xstate'

interface ShifterStates {
  states: {
    start: {}
    middle: {}
    end: {}
  }
}

type ShiftMachineEvents =
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'DIRECT'; page: number }

interface ShifterContext {
  length: number
  currentPage?: number | undefined
  pages: number[]
}

// This machine is completely decoupled from React
export const paginationMachine = ({ length, pages }: ShifterContext) =>
  Machine<ShifterContext, ShifterStates, ShiftMachineEvents>(
    {
      id: 'shifter',
      initial: 'start',
      context: {
        length,
        currentPage: 0,
        pages,
      },
      states: {
        start: {
          on: {
            NEXT: {
              target: 'middle',
              actions: 'pageUp',
            },
          },
        },

        middle: {
          on: {
            '': [
              {
                target: 'end',
                cond: ctx => ctx.currentPage === ctx.pages,
              },
              {
                target: 'start',
                cond: ctx => ctx.currentPage < 1,
              },
            ],
            NEXT: {
              actions: 'pageUp',
            },
            PREV: {
              actions: 'pageDown',
            },
          },
        },

        end: {
          on: {
            PREV: {
              target: 'middle',
              actions: 'pageDown',
            },
          },
        },
      },
    },
    {
      actions: {
        pageUp: assign(ctx => {
          console.log('up')
          return {
            currentPage: ctx.currentPage + 1,
          }
        }),

        pageDown: assign(ctx => {
          console.log('down')
          return {
            currentPage: ctx.currentPage - 1,
          }
        }),
      },
    }
  )
