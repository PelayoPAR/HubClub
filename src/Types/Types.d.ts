export type SingleProject = {
    id: string,
    projectName: string,
    URL: string,
    description: string,
    owners: string[],
    tech_used: string[],
    img: string,
    module: string,
    slug: string,
}

export type Project = {
    singleProject: SingleProject,
}

export type SingleIronhackerType = {
    id: string,
    name: string,
    email: string,
    linkedIn: string,
    gitHub: string,
    portfolio: string,
    aboutMe: string,
    slug: string,
}

export type Ironhacker = {
    singleIronhacker: SingleIronhackerType
}

export type IronhackerArr = SingleIronhackerType[]