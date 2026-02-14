# nvy.app // v.0.1 - Dithering Image Tool

Ein minimalistisches, browserbasiertes Werkzeug zur Bildmanipulation, das verschiedene Dithering-Algorithmen nutzt, um einen einzigartigen Retro-Look zu erzeugen. Insbesondere um Zeichnungen mit Hilfe des Dither Algorithmus in Tattoo-Stencils zu verarbeiten

## Features

- **Dithering Algorithmen:** Standard Threshold Dithering mit state basierter Anpassung.
- **Tint Effect:** Tönungs Effekt mit der ausgewählten Farbe.
- **Pro-Artboard:** Ein interaktives Artboard mit Zoom-to-Center und Panning.
- **Shortcuts:** Schneller Workflow durch Tastaturbefehle (Zoom, Fit-to-View).
- **Privacy First:** Alle Berechnungen finden lokal im Browser statt. Es werden keine Bilder auf Server hochgeladen.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Grafik:** [p5.js](https://p5js.org/) für Canvas-Rendering und Pixel-Manipulation
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Tailwind CSS)
- **Deployment:** Vercel

## Lokale Installation

1. Repository klonen: `git clone https://github.com/LukasWilkes/nvy.git`
2. Abhängigkeiten installieren: `npm install`
3. Entwicklungsserver starten: `npm run dev`

## Key Learnings

In diesem Projekt ging es mir vor allem darum neue interessante Dinge auszuprobieren und in meine bereits bekannten Workflows einzuarbeiten. Insbesondere die Verknüpfung von dem React Zustand State mit der p5.js Library war dabei interessant zu verfolgen.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
