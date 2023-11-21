const Jobs = [

    {
        month:"SEP",
        nday:21,
        day:"WEB",
        postDate:new Date("2023-11-01T12:00:00Z"),
        position:"Deputy Contract Manager",
        jobDesc:"Modon Real estate development company located Iraq – Baghdad is currently looking for a Contracts Manager to manage our company contracts. Ensure Contractor’s complian...",
        jobLoc:"Baghdad , Iraq"
    },
    {
        month:"SEP",
        nday:21,
        day:"WEB",
        postDate:new Date("2023-11-01T12:00:00Z"),
        position:"Deputy Contract Manager",
        jobDesc:"Modon Real estate development company located Iraq – Baghdad is currently looking for a Contracts Manager to manage our company contracts. Ensure Contractor’s complian...",
        jobLoc:"Baghdad , Iraq"
    },
    {
        month:"SEP",
        nday:21,
        day:"WEB",
        postDate:new Date("2023-10-01T12:00:00Z"),
        position:"Deputy Contract ",
        jobDesc:"Modon Real estate development company located Iraq – Baghdad is currently looking for a Contracts Manager to manage our company contracts. Ensure Contractor’s complian...",
        jobLoc:"Baghdad Iraq"
    },
    {
        month:"SEP",
        nday:21,
        day:"WEB",
        postDate:new Date("2023-09-01T12:00:00Z"),
        position:"Deputy  Manager",
        jobDesc:"Modon Real estate development company located Iraq – Baghdad is currently looking for a Contracts Manager to manage our company contracts. Ensure Contractor’s complian...",
        jobLoc:"Bagdad , Iraq"
    }
]

const positions: string[] = Array.from(new Set(Jobs.map((job) => job.position)));

const jobLocations: string[] = Array.from(new Set(Jobs.map((job) => job.jobLoc)));


export { Jobs, positions, jobLocations };
