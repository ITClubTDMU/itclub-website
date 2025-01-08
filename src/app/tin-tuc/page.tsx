import React, { Suspense } from 'react'
import News from './news'
import LoadingLevelComponent from '@/components/loading/comp-loading'

const NewsPage = () => {
  return (
    <div>
      <Suspense fallback={<LoadingLevelComponent isLoading />}>
        <News />
      </Suspense>
    </div>
  )
}

export default NewsPage