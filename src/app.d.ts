interface AppConfig{
    rootSelector:string;
    aside:AsideConfig;
    body:SectionContent[];
}


interface AsideConfig{
    profile:ProfileConfig;
    skills:SkillsConfig[];
}
interface SkillsConfig{
    category:string;
    skills:SkillConfig[];
}

interface SkillConfig{
    name:string;
    level:number;
}

interface ProfileConfig{
    image:string,
    name:string,
    profession:string,
    contact:ContactConfig[]
}


interface ContactConfig{
    icon:string,
    label:string,
    href:string,
}



interface Section{
    level:number,
    title:string,
    content:SectionContent[]   
}

type SectionContentType = "p"|"section"|"ul";
interface SectionContent{
    type:SectionContentType,
    content:string[]|string|Section,
    classList:string
}