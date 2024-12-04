        let buttons = document.getElementsByClassName("button")
        let animations = []
        for(i = 0; i<buttons.length; i++)
        {
            animations.push(false);
        }   
        function buttonclick(x,animationName,v,l)
        {
            if(v == '' || v == null)
            {
                if(animationName==null) animationName = "clickbutton"
                if (animations[x] === true) return;
                animations[x] = true;
            }
            let button = buttons[x]

            button.style.animation = "none"
            button.offsetWidth;
            button.style.animation = `${animationName} 0.5s ease`
            if(l == null) button.addEventListener("animationend", () => {animations[x] = false;}, { once: true });
            else button.addEventListener("animationend", () => {animations[x] = false; open(l)}, { once: true });
        }