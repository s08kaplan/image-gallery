import { Outlet } from "react-router-dom";
import { ErrorBoundary } from '../ErrorBoundary'

const Layout = () => {
  return (
    <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
  )
}

export default Layout