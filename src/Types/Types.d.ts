export type ChosenProject = {
    id?: string,
    projectName?: string,
    URL?: string,
    description?: string,
    owners?: string[],
    tech_used?: string[],
    img?: string,
    module?: string,
}

export type Project = {
    chosenProject: ChosenProject,
}

export type ChosenIronhacker = {
    id: string,
    name: string,
    email: string,
    linkedIn: string,
    gitHub: string,
    portfolio: string,
    aboutMe: string,
}

export type Ironhacker = {
    chosenIronhacker: ChosenIronhacker
}