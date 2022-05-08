
/**
 * 
 * @param {AppConfig} appConfig 
 * @returns 
 */

const App = function(appConfig){

    /**
     * returns an element that wraps childs , type is spec by elem
     * @param {string} elem 
     * @param {string} classList 
     * @param {Element} child 
     */
    const _wrap=function(elem,classList,child){
        const wrapper = document.createElement(elem);
        for(const cl of classList.split(" ")){
            if(cl.replaceAll(" ","")!=""){
                wrapper.classList.add(cl);
            }
        }
        if(Array.isArray(child)){
            for(const ch of child){
                wrapper.append(ch);
            }
        }else{
            wrapper.appendChild(child);
        }
        return wrapper;
    }

    /**
     * 
     * @param {string} classList 
     * @param {Element|Element[]} child 
     * @returns 
     */
    const _div = function(classList,child){
        return _wrap("div",classList,child);
    }

    /**
     * returns an ul element that wraps child element on arg
     * @param {string} classList 
     * @param {Element|Element[]} child 
     * @returns 
     */
    const _ul = function(classList,child){
        return _wrap("ul",classList,child);
    }
    /**
     * returns an li element that wraps child element on arg
     * @param {string} classList 
     * @param {Element|Element[]} child 
     * @returns 
     */
    const _li = function(classList,child){
        return _wrap("li",classList,child);
    }
    /**
     * returns an a element that wraps child element on arg
     * @param {string} href 
     * @param {string} classList 
     * @param {Element|Element[]} child 
     * @returns 
     */
    const _a = function(href,classList,child){
        const wrapper =  _wrap("a",classList,child);
        wrapper.setAttribute("href",href);
        return wrapper;
    }

    /**
     * an element with text content inside
     * @param {string} elem 
     * @param {string} classList 
     * @param {string} text 
     */
    const _text = function(elem,classList,text){
        const element = document.createElement(elem);
        for(const cl of classList.split(" ")){
            if(cl.replaceAll(" ","")!=""){
                element.classList.add(cl);
            }
        }
        element.innerHTML = text;
        return element;
    }

    /**
     * label element with text content
     * @param {string} classList 
     * @param {string} text 
     */
    const _label = function(classList,text=""){
        return _text("label",classList,text);
    }

    /**
     * returns an i element with text content
     * @param {string} classList 
     * @param {string} text 
     * @returns 
     */
    const _i = function(classList,text=""){
       return _text("i",classList,text);
    }

    /**
     * builds a profile contact part 
     * like linkedin , github etc
     * @param {ContactConfig} config
     */
    const _buildProfileContact = function(config){
        return _a(config.href,"",
            [
                _i(config.icon,config.icon),
                _label("",config.label)
            ]
        );
    }

     /**
     * builds the profile section of the aside
     * @param {ProfileConfig} config 
     */
    const  _profile = function(config){
        const profile = document.createElement("div");
        profile.classList.add("profile");
        
        /// profile img
        const profileImg = document.createElement("div");
        profileImg.classList.add("profile-img");
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = config.image;
        profileImg.appendChild(img);

        /// profile info 
        const profileInfo = document.createElement("div");
        profileInfo.classList.add("profile-info");
        profileInfo.appendChild(
            _wrap(
                "div",
                "",
                _label(
                    "font-heading3 font-bold",
                    config.name
                    )
                )
            );
        profileInfo.appendChild(
            _wrap(
                "div",
                "",
                _label(
                    "font-heading3 font-bold",
                    config.profession
                    )
                )
            );
        /// contact info 
        const profileContact = document.createElement("div");
        profileContact.classList.add("profile-contact");
        const list = document.createElement("ul");
        for(const contact of config.contact){
            list.appendChild(_li("",
                    _buildProfileContact(contact)
                )
            );
        }
        profileContact.appendChild(list);
        profile.appendChild(profileImg);
        profile.appendChild(profileInfo);
        profile.appendChild(profileContact);
        return profile;
    };

    /**
     * 
     * @param {SkillConfig} config 
     */
    const _skill = function(config){
        return _div("skill",[
            _label("skill-name",config.name),
            _wrap("label","skill-bar",
                _label(`skill-bar-${config.level}`)
            )
        ]);
    }

    /**
     * 
     * @param {SkillsConfig} config 
     */
    const _skills = function(config){
        const skills = (config.skills??[]).map(s=>_skill(s));
        return _div("section",[
            _div("section-header-1",
                _label("font-bold font-heading3",config.category) 
            ),
            _div("skills",[...skills])
        ]);
    }

    /**
     * builds resume aside 
     * @param {AsideConfig} config 
     */
    const _aside = function(config){
        return _wrap("aside","aside",[
            _profile(config.profile),
            ...(config.skills??[]).map(
                skills=>_skills(skills)
            )
        ])
    }

    /**
     * 
     * @param {*} classList 
     * @param {*} text 
     * @returns 
     */
    const _p = function(classList,text){
        return _text("p",classList,text);
    }

    /**
     * 
     * @param {Section} config 
     */
    const _section = function(config){
        console.log("building section with",config);
        const level = config.level??1;
        if(config.level>2){
            config.level=2;
        }
        const headerClass = `section-header-${level}`;
        const headerTextClass =`font-bold font-heading${level+1}`;
        const sectionBodyClass = `section-body font-bodytext${level}`;
        return _div("section",[
            _div(headerClass,[
                _label(headerTextClass,config.title),
            ]),
            _div(sectionBodyClass,[
                ...(config.content??[]).map(e=>_sectionContent(e))
            ])
        ])
    }

    /**
     * 
     * @param {SectionContent} config 
     */
    const _sectionContent = function(config){
        if(config.type == "p"){
            return _p(config.classList??"",config.content);
        }else if(config.type == "ul" && Array.isArray(config.content)){
            return _ul(config.classList??"",
                config.content.map(e=>_li("",_label("",e)))
            );
        }else if(config.type == "section" && !Array.isArray(config.content)){
            return _section(config.content);
        }else{
            console.log(config);
            throw "Invalid configuration type for "+JSON.stringify(config);
        }
    }

    /**
     * @param {SectionContent[]} sections
     */
    const _body = function(sections){
        return _div("body",[
            ...(sections??[]).map(s=>_sectionContent(s))
        ])
    }

    /**
     * 
     * @param {string} rootSelector
     * @returns 
     */
    const _init = function(){
        const root = document.querySelector(this.config.rootSelector);
        root.appendChild(_aside(this.config.aside));
        root.appendChild(_body(this.config.body));
        return;
    }

    return {
        init:_init,
        config:appConfig,
    };
}
