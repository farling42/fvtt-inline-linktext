[![ko-fi](https://img.shields.io/badge/Ko--Fi-farling-success)](https://ko-fi.com/farling)
[![patreon](https://img.shields.io/badge/Patreon-amusingtime-success)](https://patreon.com/amusingtime)
[![paypal](https://img.shields.io/badge/Paypal-farling-success)](https://paypal.me/farling)
![GitHub License](https://img.shields.io/github/license/farling42/fvtt-inline-linktext)
![](https://img.shields.io/badge/Foundry-v9-informational)
![Latest Release Download Count](https://img.shields.io/github/downloads/farling42/fvtt-inline-linktext/latest/module.zip)

## Introduction

This module allows `@inline<Document>[id]{label}` to be used to put one field from the referenced document inline in the current document.

E.g. `@inlineJournalEntry[id]{label}`  will put the usual button for the link followed by the text from the indicated journal entry.

By configuration, you can choose whether to include the entire description text from the linked entity, only the first paragraph from the linked entity, or only the first sentence from the first paragraph of the linked entity.

## Installation

Simply select the module from Foundry's Add-On Modules window, or you can install it manually using the following link:

https://github.com/farling42/fvtt-inline-linktext/releases/latest/download/module.json

## Configuration

In the module settings, you can define which field is read from each document type.

When first enabled, the default settings for the world's game system will be loaded. The game systems with specific default settings are: cyphersystem, pf1, pf2e, dnd5e

If the field is left blank, then the default value will be reinstated (this is useful when migrating from Foundry V9 to V10).

It is also possible to switch between the default method of marking inline code (light green background) and no highlighting.

## Support Your System

If your preferred game system is not directly supported, then raise an issue at https://github.com/farling42/fvtt-inline-linktext/issues and I will see what I can do about that. (If you can provide your configured data field settings then that would be even better.)

## Support

If you like what it does, then all contributions will be gratefully received at [Kofi](https://ko-fi.com/farling) or [Paypal](https://paypal.me/farling)
or if you're feeling really generous you could set up a regular contribution at [Patreon](https://www.patreon.com/amusingtime) 
