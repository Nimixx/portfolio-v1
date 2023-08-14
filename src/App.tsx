import './global.style.css'
import AppLayout from './layouts/AppLayout'
import ContentLayout from './layouts/ContentLayout'
import { ThemeProvider } from './layouts/theme-provider'

import Hero from './components/hero/Hero'
import Bio from './components/bio/Bio'
import Projects from './components/projects/Projects'
import TechStuck from './components/stuck/TechStuck'
import Archive from './components/archive/Archive'
import Courses from './components/courses/Courses'
import Contacts from './components/contacts/Contacts'
import { Toaster } from './components/ui/toaster'

export default function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <Hero />
        <ContentLayout>
          <Bio />
          <TechStuck />
          <Projects />
          <Archive />
          <Courses />
          <Contacts />
          <Toaster />
        </ContentLayout>
      </AppLayout>
    </ThemeProvider>
  )
}
