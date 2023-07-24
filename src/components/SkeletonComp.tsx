import React, {FC, ReactNode} from 'react';
import { Skeleton} from 'antd';
import styles from '../styles/skeletoncomp.module.scss'

type Skeletonprops = {
    children:ReactNode,
    // className:string,
    loading:boolean
    active:boolean
}



const SkeletonComp:FC<Skeletonprops> = ({children, loading, active}) => {
  return (
    <div>
        <Skeleton 
        // className={styles['skeleton']}
        loading={loading}
        active={active}
        avatar={true}
         paragraph={{ rows: 30 }}
        round={true}
        >
            {children}
        </Skeleton>
    </div>
  )
}

export default SkeletonComp