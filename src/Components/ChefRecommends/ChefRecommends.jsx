import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ChefMenuCard from '../ChefMenuCard/ChefMenuCard';

const ChefRecommends = () => {
    const [chefMenu,setChefMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setChefMenu(data.slice(0,3)))
    },[])
    return (
        <div>
           <SectionTitle
           subHeading={'Should Try'}
           heading={'Chef Recommends'}
           >
            </SectionTitle> 

        <div className='grid md:grid-cols-3 gap-10'>
            {
                chefMenu.map(menu => <ChefMenuCard key={menu._id} menu={menu}></ChefMenuCard>)
            }
        </div>


        </div>
    );
};

export default ChefRecommends;