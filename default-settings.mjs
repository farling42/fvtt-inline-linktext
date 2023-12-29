
// Arrays should be accessed using index as a separate field,
// e.g.   data.pages[0].content should be put into the table as data.pages.0.content

//
// Settings for Foundry V9
//
const fvtt_9_settings = {
    "cyphersystem": {
        "Actor"        : "data.data.basic.description",
        "Item"         : "data.data.description",
        "JournalEntry" : "data.content",
        "RollTable"    : "description",
        "Scene"        : "name",
    },
    "dnd5e" : {
        "Actor"        : "data.data.details.biography.value",
        "Item"         : "data.data.description.value",
        "JournalEntry" : "data.content",
        "RollTable"    : "description",
        "Scene"        : "name",
    },
    "pf1" : {
        "Actor"        : "data.data.details.notes.value",
        "Item"         : "data.data.description.value",
        "JournalEntry" : "data.content",
        "RollTable"    : "description",
        "Scene"        : "name",
    },
    "pf2e" : {
        "Actor"        : "data.data.details.biography.backstory",
        "Item"         : "data.data.description.value",
        "JournalEntry" : "data.content",
        "RollTable"    : "description",
        "Scene"        : "name",
    },
};

//
// Settings for Foundry V10
//
const fvtt_10_settings = {
    "cyphersystem": {
        "Actor"        : "system.basic.description",
        "Item"         : "system.description",
        "JournalEntry" : "pages.contents.0.text.content",
	    "JournalEntryPage" : "text.content",
        "RollTable"    : "description",
        "Scene"        : "name",
    },
    "dnd5e" : {
        "Actor"        : "system.details.biography.value",
        "Item"         : "system.description.value",
        "JournalEntry" : "pages.contents.0.text.content",
	    "JournalEntryPage" : "text.content",
        "RollTable"    : "description",
        "Scene"        : "name",
    },
    "pf1" : {
        "Actor"        : "system.details.notes.value",
        "Item"         : "system.description.value",
        "JournalEntry" : "pages.contents.0.text.content",
	    "JournalEntryPage" : "text.content",
        "RollTable"    : "description",
        "Scene"        : "name",
    },
    "pf2e" : {
        "Actor"        : "system.details.biography.backstory",
        "Item"         : "system.description.value",
        "JournalEntry" : "pages.contents.0.text.content",
	    "JournalEntryPage" : "text.content",
        "RollTable"    : "description",
        "Scene"        : "name",
    },
};

const settings = {
    "9"  : fvtt_9_settings,
    "10" : fvtt_10_settings, 
    "11" : fvtt_10_settings, 
    "12" : fvtt_10_settings, 
}

const default_settings = {
    "9" : {
	    "Actor"        : "data.data.description",
	    "Item"         : "data.data.description",
	    "JournalEntry" : "data.content",
	    "RollTable"    : "description",
	    "Scene"        : "name",
    }
}

// base for V10, V11, V12 onwards
const base_default_settings = {
    "Actor"        : "system.description",
    "Item"         : "system.description",
    "JournalEntry" : "pages.contents.0.text.content",
    "JournalEntryPage" : "text.content",
    "RollTable"    : "description",
    "Scene"        : "name",
}

export default function defaultSettings() {
    let ver = game.version.split('.')[0];
    return settings[ver]?.[game.system.id] || default_settings[ver] || base_default_settings;
}