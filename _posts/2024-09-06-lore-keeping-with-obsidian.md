---
layout: post
title: "Lore-keeping with Obsidian"
date: 2024-09-06 09:36:42 -0400
tags: obsidian writing ttrpg
---

I'm currently re-reading [The Lord of the Rings](https://en.wikipedia.org/wiki/The_Lord_of_the_Rings) and a thought occurred to me - if I wanted to write an account of my adventures like Bilbo or otherwise create some great work of epic fantasy, how would I go about organizing the lore? Maintaining everything in some hierarchical directory structure of google docs sounds too restrictive for organic world-building.

I've been using [Obsidian](https://obsidian.md) for general note taking for the past year, and it's significantly improved my ability to recall information and draw connections between my thoughts. The easy document linking feature combined with graph view creates a stunning visualization of everything I've written. It would be so cool if I could create a graph of all of the interrelated characters, settings, and plot events to visualize a book's social network, and it would be doubly helpful for organizing my own writing.

Let's see if Obsidian will work. I created a new vault called and generated a few names of characters and places with [Auto Roll Tables](http://autorolltables.github.io) to get things going:

Characters

- Merdon
- Lindsay
- Rockcut
- Galiron

Places

- The Lewd Lamb
- Michael's Magical Accessories
- The Fey Lion

The Obsidian graph for this isn't very exciting until we start connecting topics to each other.

![Graph view in Obsidian showing nodes for all of the characters and places with no connecting lines](/assets/img/2024-09-06/no-edges.png)

If we add in a few basic connections using document links, things start to look more interesting.

![Graph view in Obsidian showing nodes for all of the characters and places, with some nodes connected by edges](/assets/img/2024-09-06/no-edges.png)

A lot of the edges are probably by design. If we write Galiron as the tavern keep at The Lewd Lion, it makes sense that an edge exists between those two nodes. What's more interesting in this view is the number of edges going to each node. If Merdon was initially conceived as a minor plot character but suddenly their node has loads of edges going all over the graph, perhaps they're more influential than you thought. Maybe there's an interesting sub-plot that could be developed using that character?

It can also help figure out where you've missed connections. Let's say there's a major plot goal of Rockcut and Lindsay teaming up to defeat a goblin tribe, but you need a way to bring the characters together. Well hey, it looks like they share a common node in The Fey Lion so perhaps they could meet there!

If you're a real data nerd, there's even more fun to be had with the [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) plugin. It can turn your writing into a queryable database using document metadata allowing you to figure out exactly how many pints of ale your favorite characters have enjoyed throughout their journey.

Have fun writing!
