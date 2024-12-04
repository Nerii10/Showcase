IsAnimatingSearch = false;
IsSearchOpen = false;


    function Search()
    {
    if (IsAnimatingSearch) return;
        if(IsSearchOpen)
        {
            IsAnimatingSearch = true;
            let SearchBar = document.getElementById("SearchBar")
            let Header = document.getElementById("Header")
            let home = document.getElementById("home")

            SearchBar.style.animation = "none"
            SearchBar.offsetWidth;
            SearchBar.style.animation = "CloseSearch 0.5s ease forwards"



            Header.style.animation = "none"
            Header.offsetWidth;
            Header.style.animation = "HeaderFadeInShadow 0.5s  ease forwards"

            SearchBar.addEventListener('animationend', () => { IsAnimatingSearch = false; IsSearchOpen = false;}, {once:true});
        }
        else
        {
            IsAnimatingSearch = true;
            let SearchBar = document.getElementById("SearchBar")
            let home = document.getElementById("home")
            let Header = document.getElementById("Header")
            SearchBar.style.animation = "none"
            SearchBar.offsetWidth;
            SearchBar.style.animation = "OpenUpSearch 0.5s ease forwards"



            Header.style.animation = "none"
            Header.offsetWidth;
            Header.style.animation = "HeaderFadeOutShadow 0.5s  ease forwards"
            

            SearchBar.addEventListener('animationend', () => { IsAnimatingSearch = false; IsSearchOpen = true; }, {once:true});
        }
    } 