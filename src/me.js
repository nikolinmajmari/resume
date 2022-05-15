/// init 


const myApp = app({
    rootSelector:"main",
    aside:{
        profile:{
            contact:[
                {href:"#",icon:"P","label":"Phone"},
                {href:"#",icon:"E","label":"Email"},
                {href:"#",icon:"L","label":"Linkedin"},
                {href:"#",icon:"W","label":"Website"},
                {href:"#",icon:"G","label":"Github"},
            ],
            image:"https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
            name:"FirstName LastName",
            profession:"Profession Name Here"
        },
        skills:[
            {
                category:"Skills",
                skills:[
                    {name:"JavaScript",level:5},
                    {name:"Python",level:5},
                    {name:"PHP",level:5},
                    {name:"SQL",level:5},
                    {name:"CSS",level:5},
                ]
            },
            {
                category:"Skills",
                skills:[
                    {name:"JavaScript",level:5},
                    {name:"Python",level:5},
                    {name:"PHP",level:5},
                    {name:"SQL",level:5},
                    {name:"CSS",level:5},
                ]
            }
        ]
    },
    body:[
        {
            type:"p",
            classList:"p-4",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lorem eget augue scelerisque pellentesque. Morbi tincidunt tincidunt fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vitae neque et neque finibus molestie sagittis sit amet orci. Vestibulum ullamcorper nisl nibh, luctus vulputate lectus pretium nec."
        },
        {
            type:"section",
            classList:"",
            content:{
                level:1,
                title:"Quisque volutpat convallis massa",
                content:[
                    {
                        type:"p",
                        classList:"p-3",
                        content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                    },
                    {
                        type:"ul",
                        classList:"p-4",
                        content:[
                            "Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur.",
                            "Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur.",
                            "Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur.",
                            "Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur.",
                            "Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur.",
                            "Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur."
                        ]
                    },
                    {
                        type:"p",
                        classList:"p-3",
                        content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                    },
                    {
                        type:"section",
                        classList:"",
                        content:{
                            level:1,
                            title:"Quisque volutpat convallis massa",
                            content:[
                                {
                                    type:"p",
                                    classList:"p-3",
                                    content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                                },
                            ]
                        }
                    },
                    {
                        type:"section",
                        classList:"",
                        content:{
                            level:1,
                            title:"Quisque volutpat convallis massa",
                            content:[
                                {
                                    type:"p",
                                    classList:"p-3",
                                    content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                                },
                            ]
                        }
                    },
                ]
            }
        },
        {
            type:"section",
            content:{
                title:"Quisque volutpat convallis massa",
                level:1,
                content:[
                    {
                        type:"p",
                        classList:"p-3",
                        content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                    },
                    {
                        type:"p",
                        classList:"p-3",
                        content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                    },
                    {
                        type:"section",
                        classList:"",
                        content:{
                            level:1,
                            title:"Quisque volutpat convallis massa",
                            content:[
                                {
                                    type:"p",
                                    classList:"p-3",
                                    content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                                },
                            ]
                        }
                    },
                    {
                        type:"section",
                        classList:"",
                        content:{
                            level:1,
                            title:"Quisque volutpat convallis massa",
                            content:[
                                {
                                    type:"p",
                                    classList:"p-3",
                                    content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                                },
                            ]
                        }
                    },
                ]
            }
        },
        {
            type:"section",
            classList:"",
            content:{
                level:1,
                title:"Quisque volutpat convallis massa",
                content:[
                    {
                        type:"p",
                        classList:"p-3",
                        content:"Duis in sapien diam. Quisque volutpat convallis massa. Duis commodo risus vitae dolor accumsan, vitae iaculis augue consectetur. Sed ac mattis ante. Mauris ac dolor convallis velit consequat porta eu a felis. Nulla neque purus, faucibus id risus ullamcorper, lobortis tincidunt sem. Nullam auctor urna orci, eget aliquam tortor dignissim a. Aliquam gravida nisl vitae blandit dictum."
                    },
                ]
            }
        },
    ]
});
myApp.init();