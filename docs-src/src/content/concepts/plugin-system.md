---
title: Plugin System
description: Plugins are part of the long-term expansion strategy for the Infinity Charts platform.
heading: Plugin System
summary: The core should stay clean while still leaving room for growth.
status: In Progress
---

Infinity Charts is being built as a platform core, which means extensibility needs a deliberate home.

## Current Foundation

The engine already includes plugin registration and lifecycle hooks around:

- initialization
- render
- update
- destroy

## Why Plugins Matter

Plugins help the core stay focused while still allowing future expansion for:

- annotations
- exports
- accessibility layers
- advanced interactions
- domain-specific visual packs

## Design Rule

Plugins should extend the engine without forcing framework-specific behavior into the core repository.

That boundary is important:

- core stays framework-agnostic
- wrappers, if they exist later, stay elsewhere
- advanced features can grow without turning the engine into a monolith

