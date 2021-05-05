import home3 from '../../Assets/menu/home3.png';
import compass from '../../Assets/menu/compass.png';
import compass2 from '../../Assets/menu/compass2.png';
import heart from '../../Assets/menu/heart.png';
import avatar from '../../Assets/menu/avatar.png';
import bookmark from '../../Assets/menu/bookmark.png';
import cogs from '../../Assets/menu/cogs.png'
import exit from '../../Assets/menu/exit.png'

export const MenuList = {
    navigationMenu : [
        {link:'/', icon:home3},
        {link:'/chat', icon:compass},
        {link:'/explore', icon:compass2},
        {icon:heart, onClick:1, name:'heart'},
        {icon:avatar, onClick:1, name:'MenuList.menuDropdown'}
    ],
    menuDropdown:[
        {link:'/profile', icon:avatar, text:'Profile'},
        {link:'/saved', icon:bookmark, text:'Saved'},
        {link:'/settings', icon:cogs, text:'Settings'},
        {link:'/', icon:exit, text:'Log out'}
    ]
}

