import plugin from 'tailwindcss/plugin'

export const shadcnPlugin = plugin(
  // 1. Add CSS variables definition to the base layer
  function ({ addBase, addUtilities }) {
    addBase({
      ':root': {
        '--background': '0 0% 100%',
        '--foreground': '222.2 84% 4.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',
        '--primary': '203 50% 40%',
        '--primary-foreground': '210 40% 98%',
        '--secondary': '210 40% 96.1%',
        '--secondary-foreground': '222.2 47.4% 11.2%',
        '--muted': '210 40% 96.1%',
        '--muted-foreground': '215.4 16.3% 46.9%',
        '--accent': '210 40% 96.1%',
        '--accent-foreground': '222.2 47.4% 11.2%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '214.3 31.8% 91.4%',
        '--input': '214.3 31.8% 91.4%',
        '--ring': '203 90%, 39%',
        '--radius': '0.5rem'
      },
      '.dark': {
        '--background': '222.2 47.4% 11.2%',
        '--foreground': '210 40% 98%',
        '--card': '222.2 47.4% 11.2%',
        '--card-foreground': '210 40% 98%',
        '--popover': '222.2 47.4% 11.2%',
        '--popover-foreground': '210 40% 98%',
        '--primary': '203 50% 40%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '217.2 32.6% 17.5%',
        '--secondary-foreground': '210 40% 98%',
        '--muted': '217.2 32.6% 17.5%',
        '--muted-foreground': '215 20.2% 65.1%',
        '--accent': '217.2 32.6% 17.5%',
        '--accent-foreground': '210 40% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '217.2 32.6% 17.5%',
        '--input': '217.2 32.6% 17.5%',
        '--ring': '224.3 76.3% 48%',
        '--fc-list-event-hover-bg-color': 'rgb(10, 120, 189)',
        '--fc-neutral-bg-color': 'rgb(10, 120, 189)'
      }
    })

    addBase({
      '*': {
        '@apply border-border': {}
      },
      body: {
        '@apply bg-background text-foreground': {}
      }
    })

    addUtilities({
      // Animation intertion count
      '.animate-infinite': {
        'animation-iteration-count': 'infinite'
      },
      '.animate-once': {
        'animation-iteration-count': '1'
      },
      '.animate-twice': {
        'animation-iteration-count': '2'
      },
      '.animate-thrice': {
        'animation-iteration-count': '3'
      },
      // Animation fill mode
      '.animate-run': {
        'animation-play-state': 'running'
      },
      '.animate-play': {
        'animation-play-state': 'running'
      },
      '.animate-stop': {
        'animation-play-state': 'paused'
      },
      '.animate-pause': {
        'animation-play-state': 'paused'
      },
      // Animation direction
      '.animate-normal': {
        'animation-direction': 'normal'
      },
      '.animate-reverse': {
        'animation-direction': 'reverse'
      },
      '.animate-alternate': {
        'animation-direction': 'alternate'
      },
      '.animate-alternate-reverse': {
        'animation-direction': 'alternate-reverse'
      }
    })
  },
  // 2. Extend the Tailwind theme with themeable utilities
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px'
        }
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))'
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))'
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))'
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))'
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))'
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))'
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))'
          }
        },
        backgroundImage: {
          login: "url('../public/bg-login.png')"
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)'
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' }
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' }
          },
          wiggle: {
            '0%, 100%': {
              transform: 'rotate(-3deg)'
            },
            '50%': {
              transform: 'rotate(3deg)'
            }
          },
          'wiggle-more': {
            '0%, 100%': {
              transform: 'rotate(-12deg)'
            },
            '50%': {
              transform: 'rotate(12deg)'
            }
          },
          'rotate-y': {
            '0%': {
              transform: 'rotateY(360deg)'
            },
            '100%': {
              transform: 'rotateY(0)'
            }
          },
          'rotate-x': {
            '0%': {
              transform: 'rotateX(360deg)'
            },
            '100%': {
              transform: 'rotateX(0)'
            }
          },
          jump: {
            '0%, 100%': {
              transform: 'scale(100%)'
            },
            '10%': {
              transform: 'scale(80%)'
            },
            '50%': {
              transform: 'scale(120%)'
            }
          },
          'jump-in': {
            '0%': {
              transform: 'scale(0%)'
            },
            '80%': {
              transform: 'scale(120%)'
            },
            '100%': {
              transform: 'scale(100%)'
            }
          },
          'jump-out': {
            '0%': {
              transform: 'scale(100%)'
            },
            '20%': {
              transform: 'scale(120%)'
            },
            '100%': {
              transform: 'scale(0%)'
            }
          },
          shake: {
            '0%': {
              transform: 'translateX(0rem)'
            },
            '25%': {
              transform: 'translateX(-1rem)'
            },
            '75%': {
              transform: 'translateX(1rem)'
            },
            '100%': {
              transform: 'translateX(0rem)'
            }
          },
          fade: {
            '0%': {
              opacity: '0'
            },
            '100%': {
              opacity: '1'
            }
          },
          'fade-down': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-2rem)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            }
          },
          'fade-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(2rem)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            }
          },
          'fade-left': {
            '0%': {
              opacity: '0',
              transform: 'translateX(2rem)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)'
            }
          },
          'fade-right': {
            '0%': {
              opacity: '0',
              transform: 'translateX(-2rem)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)'
            }
          },
          'flip-up': {
            '0%': {
              transform: 'rotateX(90deg)',
              transformOrigin: 'bottom'
            },
            '100%': {
              transform: 'rotateX(0)',
              transformOrigin: 'bottom'
            }
          },
          'flip-down': {
            '0%': {
              transform: 'rotateX(-90deg)',
              transformOrigin: 'top'
            },
            '100%': {
              transform: 'rotateX(0)',
              transformOrigin: 'top'
            }
          }
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          wiggle: 'wiggle 1s both',
          'wiggle-more': 'wiggle-more 1s both',
          'rotate-y': 'rotate-y 1s both',
          'rotate-x': 'rotate-x 1s both',
          jump: 'jump .5s both',
          'jump-in': 'jump-in .5s both',
          'jump-out': 'jump-out .5s both',
          shake: 'shake .5s both',
          fade: 'fade 1s both',
          'fade-down': 'fade-down 1s both',
          'fade-up': 'fade-up 1s both',
          'fade-left': 'fade-left 1s both',
          'fade-right': 'fade-right 1s both',
          'flip-up': 'flip-up 1s both',
          'flip-down': 'flip-down 1s both'
        }
      }
    }
  }
)
