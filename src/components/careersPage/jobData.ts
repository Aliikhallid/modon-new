const Jobs = [

    {
        month:"NOV",
        nday:1,
        day:"MON",
        postDate:new Date("2021-11-01T12:00:00Z"),
        position:"Deputy Contract Manager",
        jobDesc:"Modon Real estate development company located Iraq - Baghdad is currently looking for a Contracts Manager to manage our company contracts. Ensure Contractor’s complian...",
        jobLoc:"Baghdad , Iraq"
    },
    {
        month:"NOV",
        nday:1,
        day:"MON",
        postDate:new Date("2021-11-01T12:00:00Z"),
        position:"Architect Engineer",
        jobDesc:"An architecture engineer is required with experience in working as an engineer in real estate designs, decorations or advertising. Job Responsibilities Executing innovative and professional designs ac...",
        jobLoc:"Baghdad , Iraq"
    }

]

const positions: string[] = Array.from(new Set(Jobs.map((job) => job.position)));

const jobLocations: string[] = Array.from(new Set(Jobs.map((job) => job.jobLoc)));

interface PositionInfo  {
    positionName: string;
    location:string;
    postDate:Date;
    description: string;
    Responsibilities:string[],
    skills:string[],
    requirements:{type:string,education:string,experience:string}


  }

type JobDictionary = Record<string, PositionInfo>;
const JobDesc:JobDictionary = {
    "Deputy Contract Manager":{
        positionName: "Deputy Contract Manager",
        location:"Baghdad, Iraq",
        postDate:new Date("2021-11-01T12:00:00Z"),
        description:"Modon Real estate development company located Iraq - Baghdad is currently looking for a Contracts Manager to manage our company contracts.",
        Responsibilities:["Ensure Contractor's compliance with contractual requirements, e.g., Performance Security Bond, Letter of Credit, Insurance Policies, etc.","Coordinate the change control process, including: amendments, change orders and other contract changes.","Support the resolution of Contractor change notices and claims.","Coordinate the issue of any suspension, cancellation, and / or termination notices in line with contract terms.","Advise project team of contract administration and subcontracting issues, and steps being taken to mitigate consequences.","Participate in project team’s weekly / monthly meeting with Contractor.","Capture and communicate contract administration and subcontracting lessons learned for the project.","Contract Close-Out, including Indemnity Letters, Documents for Operations, Warranty Procedure, etc.","Establish a close-out agreement with Contractor (settlement of any outstanding items)","List and agree on contract’s surviving obligations","Prepares Request for Proposal. Interfaces with affected sections to clarify and ensure that all necessary data has been included","Receives contractors’ responses to requests for proposals, determines each contractor’s ability to meet Company and project requirements, and negotiates the terms and conditions","Negotiate changes to the terms and conditions in order to reduce risk exposure.","Prepares contract documents and amendments, ensures that terms and conditions will be appropriate.","Establishes and maintains accurate tracking records tailored to each contract.","Review proposals to ensure compliance with contract requirements.","Coordinate with the Legal, Risk, Project Controls, and Business Services on contractual terms and risk issues."],
        skills:["Experience in a contracts administration role in real estate development industry.","Good understanding & extensive experience of procurement and contract administration processes and principles.","Strong grasp of procedural requirements & necessity of providing an Audit Trail for Management purposes.","Ability to efficiently work with other groups to resolve issues.","Ability to adapt to tight deadlines, heavy workloads, and frequent changes in priorities.","Proficient in Microsoft Office suite of software programs.","10 years working construction & supervision in Middle East Countries.","Experience in Construction & real estate Projects.","Civil & Architect Engineering background is added value.","Arabic / English Bilingual is a must."],
        requirements:{type:"Full Time", education:"Bacgelor's (required)",experience:"10 years (required)"}
    },
    "Architect Engineer":{
        positionName: "Architect Engineer",
        location:"Baghdad, Iraq",
        postDate:new Date("2021-11-01T12:00:00Z"),
        description:"An architecture engineer is required with experience in working as an engineer in real estate designs, decorations or advertising.",
        Responsibilities:["Executing innovative and professional designs according to the company's standards.","Task Scheduling to meet deadlines.","Coordinating with the various operational entities.","Keeping pace with the latest developments in creative designs through the use of the latest tools and programs."],
        skills:["AUTO CAD (required)","3D MAX (required)","SKETSHUP (required)","PHOTOSHOP (required)","LUMION (required)"],
        requirements:{type:"Full Time", education:"Bacgelor's (required)",experience:"none"}

    }
}

export { Jobs, positions, jobLocations,JobDesc };
