// import React, {useState, useEffect} from 'react'
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined
// } from '@ant-design/icons';
// import { Layout, Menu, Button, theme } from 'antd';
// import { useMediaQuery, Box, Spacer, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
// import styles from '../../styles/dashboard.module.scss'
// import Profilecard from '@/components/Profilecard';
// import profileimage from '../../assets/biyi.jpg'
// import Categories from '@/components/Categories';
// import { AiOutlineHome }from 'react-icons/ai'
// import { BiFoodMenu } from 'react-icons/bi'
// import {MdOutlineFavoriteBorder } from 'react-icons/md'
// import {CiSettings} from 'react-icons/ci'
// import {CgCommunity} from 'react-icons/cg'
// import Community from '../../assets/community.svg'
// import '../../styles/global.scss'
// import { useRouter } from 'next/router'
// import RecipesListpage from '../recipes/RecipesListpage';


// const { Header, Sider, Content } = Layout;

// const Dashboard = () => {

//   const [collapsed, setCollapsed] = useState<boolean>(false);
//   const [current, setCurrent] = useState<string>('');
//   const [isLargerThan992] = useMediaQuery('(min-width: 992px)')
//   const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
//   const cardWidth = useBreakpointValue({ base: '20%', sm: '20%', md: '10%', lg: '12%',xl:'10%' });
//   const router = useRouter();


//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

// useEffect(()=> {
//   setCurrent('/categories/Categoriespage')
// },[])  

 
//   return (
    
//       <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed} 
//        style={{
//         overflow: 'auto',
//         height: '100vh',
//         position: 'fixed',
//         left: 0,
//         top: 0,
//         bottom: 0,
//         backgroundColor:'#fe9500',
//         zIndex:cardWidth ? 9999 : 9999,
//       }}
//       >
//         <>
//           <div className="dashboard-menu">
//             <Menu
//               className='menu-options'
//               mode="inline"
//               defaultSelectedKeys={['/home']}
              
//             >
//                <Menu.Item key="/home" onClick={() => setCurrent('/categories/Categoriespage')} icon={<AiOutlineHome/>}>
//                 Home
//                </Menu.Item>
//                <Menu.Item key="/recipe" onClick={() => setCurrent('/recipes/RecipesListpage')} icon={<BiFoodMenu/>}>
//                 My Recipe
//                </Menu.Item>
//                <Menu.Item key="/community" onClick={() => setCurrent('/categories/Categoriespage')} icon={<BiFoodMenu/>}>
//                 Community
//                </Menu.Item>
//                <Menu.Item key="/favourite" onClick={() => setCurrent('/categories/Categoriespage')} icon={<MdOutlineFavoriteBorder/>}>
//                 Favourites
//                </Menu.Item>
//                <Menu.Item key="/settings" onClick={() => setCurrent('/categories/Categoriespage')} icon={<CiSettings/>}>
//                 Settings
//                </Menu.Item>
//             </Menu>
//           </div>
//           </>
//       </Sider>
//       <Layout>
//         <>
//         <Header style={{ paddingRight: 20, background: colorBgContainer, width:'100%' }}>
//           <Flex direction={'row'}  minWidth='max-content' alignItems='center' gap='2' >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//               position:'absolute',
//               top:0,
//               left:collapsed ? 80 : 200,
//               zIndex:9999
//             }}
//           />
         
//           <Spacer></Spacer>
//           <Box
//           height={'60px'}
//           width={isLargerThan992 ? '500px': '200px'}
//           className={styles['navbarcard']}
//           >
//             <Profilecard src={profileimage} alt='profileimage' />
//           </Box>
//           </Flex>
//         </Header>
//         {current === '/categories/Categoriespage' && (
//         <Content
//         style={{ marginInline:cardWidth, overflow: 'initial' }}>
//           <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
//             <Categories/>
//         </div>
//         </Content>
//         ) }
//         {current === '/recipes/RecipesListpage' && (
//         <Content
//         style={{ marginInline:cardWidth, overflow: 'initial' }}
//         ><div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
//             <RecipesListpage/>
//         </div>
//         </Content>
//         ) }
//         {current === '3' && (
//         <Content
//         style={{ margin: '24px 16px 0', overflow: 'initial' }}
//         ><div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
//             <Text>Hello Three</Text>
//         </div>
//         </Content>
//         ) }
//         {current === '4' && (
//         <Content
//         style={{ margin: '24px 16px 0', overflow: 'initial' }}
//         ><div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
//             <Text>Hello Four</Text>
//         </div>
//         </Content>
//         ) }
//         {current === '5' && (
//         <Content
//         style={{ margin: '24px 16px 0', overflow: 'initial' }}
//         ><div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
//             <Text>Hello Five</Text>
//         </div>
//         </Content>
//         ) }
//         </>
//       </Layout>
//     </Layout>
  
//   )
// }

// export default Dashboard