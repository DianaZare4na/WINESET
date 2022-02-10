import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Главная',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: 'Подарочные наборы',
    path: '/gifts',
    icon: <FaIcons.FaGift />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Наборы',
        path: '/gifts/Gift',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Вино и алкоголь',
    path: '/wineandalkohol',
    icon: <FaIcons.FaWineBottle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Вино',
        path: '/wineandalkohol/wine',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Виски',
        path: '/wineandalkohol/whiskey',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Деликатесы',
    path: '/delicacies',
    icon: <FaIcons.FaCheese />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Хомон',
        path: '/delicacies/jamon',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Сыр',
        path: '/delicacies/cheese',
        icon: <IoIcons.IoIosPaper />
      },
      {
         title: 'Шоколад',
         path: '/delicacies/chocolate',
         icon: <IoIcons.IoIosPaper />
       }
    ]
  },
  {
    title: 'Бокалы и свечи',
    path: '/glassesandcandles',
    icon: <FaIcons.FaWineGlassAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Свечи',
        path: '/glassesandcandles/candle',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Бокалы',
        path: '/glassesandcandles/glass',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];
