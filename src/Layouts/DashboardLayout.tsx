import React, { useEffect, useState, ReactNode, FC } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import styles from '@/styles/dashboard.module.scss'
import Profilecard from '@/components/Profilecard';
import profileimage from '@/assets/biyi.jpg'
import Categories from '@/components/Categories';
import { AiOutlineHome } from 'react-icons/ai'
import { BiFoodMenu } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { CiSettings } from 'react-icons/ci'
import { useMediaQuery, Box, Spacer, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';




interface Childrenprops {
  children: ReactNode
}

const DashboardLayout: FC<Childrenprops> = ({ children }) => {

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>('');
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)')
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const layoutMargin = useBreakpointValue({ base: '18%', sm: '15%', md: '10%', lg: '12%', xl: '10%' });
  const layoutWidth = useBreakpointValue({ base: '100%', sm: '100%', md: '90%', lg: '100%', xl: '85%' });
  const router = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Header, Sider, Content } = Layout;
  const currentPath = router.pathname;
  // useEffect(()=> {
  //   router.push('/categories/Categoriespage')
  // },[])  

  const GetselectedMenukey = () => {

    const routeToKeyMap = {
      '/': 'home',
      '/about': 'about',
      '/contact': 'contact',
      '/favourites': 'favourites',
      '/settings': 'settings'
    };

    return routeToKeyMap[currentPath];
  }

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#fe9500',
            zIndex: layoutMargin ? 9999 : 9999,
          }}
        >
          <>
            <div className="dashboard-menu">
              <Menu
                className='menu-options'
                mode="inline"
                defaultSelectedKeys={[GetselectedMenukey()]}
                // selectedKeys={[GetselectedMenukey()]}
                defaultActiveFirst={true}
              // defaultSelectedKeys={['/home']}
              >
                <Menu.Item key="/home" onClick={() => router.push('/categories/Categoriespage')} icon={<AiOutlineHome />}>
                  Home
                </Menu.Item>
                <Menu.Item key="/recipe" onClick={() => router.push('/recipes/RecipesListpage')} icon={<BiFoodMenu />}>
                  My Recipe
                </Menu.Item>
                {/* <Menu.Item key="/community" onClick={() => setCurrent('/categories/Categoriespage')} icon={<BiFoodMenu />}>
                  Community
                </Menu.Item> */}
                <Menu.Item key="/favourites" onClick={() => router.push('/favourites/Favouritespage')} icon={<MdOutlineFavoriteBorder />}>
                  Favourites
                </Menu.Item>
                <Menu.Item key="/settings" onClick={() => router.push('/settings/Settingspage')} icon={<CiSettings />}>
                  Settings
                </Menu.Item>
              </Menu>
            </div>
          </>
        </Sider>
        <Layout>
          <>
            <Header style={{ paddingRight: 0, background: colorBgContainer, width: '100%' }}>
              <Flex direction={'row'} alignItems='center' gap='2' justify={'space-between'}>
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    position: 'absolute',
                    top: 0,
                    left: collapsed ? 80 : 200,
                    zIndex: 9999
                  }}
                />

                <Spacer></Spacer>
                <Box
                  height={'60px'}
                  width={isLargerThan992 ? '500px' : '200px'}
                  className={styles['navbarcard']}
                >
                  <Profilecard src={profileimage} alt='profileimage' />
                </Box>
              </Flex>
            </Header>

            <Content
              style={{ marginInline: layoutMargin, width: layoutWidth }}>
              <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                {children}
              </div>
            </Content>
          </>
        </Layout>
      </Layout>
    </>
  )
}

export default DashboardLayout;



{/* {current === '/recipes/RecipesListpage' && (
      <Content
      style={{ marginInline:cardWidth, overflow: 'initial' }}
      ><div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
         {children}
      </div>
      </Content>
      ) }
      {current === '3' && (
      <Content
      style={{ margin: '24px 16px 0', overflow: 'initial' }}
      ><div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
          {children}
      </div>
      </Content>
      ) }
      {current === '4' && (
      <Content
      style={{ margin: '24px 16px 0', overflow: 'initial' }}
      ><div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
          {children}
      </div>
      </Content>
      ) }
      {current === '5' && (
      <Content
      style={{ margin: '24px 16px 0', overflow: 'initial' }}
      ><div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
          {children}
      </div>
      </Content>
      ) } */}