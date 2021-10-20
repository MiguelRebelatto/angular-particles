import { Component } from '@angular/core';
import { Container, IParticlesProps, Main } from 'ng-particles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  options: IParticlesProps = {
    backgroundMode: {
      enable: true
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 0
      },
      collisions: {
        enable: false
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: { min: 0.3, max: 0.8 }
      },
      size: {
        value: { min: 1, max: 10 }
      },
      move: {
        enable: true,
        size: true,
        speed: 5,
        direction: "none",
        outModes: {
          default: "destroy"
        },
        trail: {
          enable: true,
          fillColor: "#000000",
          length: 3
        }
      }
    },
    detectRetina: true,
    background: {
      color: "#000"
    },
    emitters: {
      direction: "none",
      rate: {
        delay: 0.25,
        quantity: 10
      },
      position: {
        x: 50,
        y: 50
      },
      size: {
        width: 0,
        height: 0
      },
      spawnColor: {
        value: "#ff0000",
        animation: {
          h: {
            enable: true,
            speed: 5
          },
          l: {
            enable: true,
            speed: 0,
            offset: {
              min: 20,
              max: 80
            }
          }
        }
      }
    }
  }

  options2: IParticlesProps = {
    background: {
      color: {
        value: "#444444"
      }
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 5
      }
    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);
  }
}
