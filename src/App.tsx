/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FocusAreaOverviewPage } from './pages/FocusAreaOverviewPage';
import { FocusAreaDetailPage } from './pages/FocusAreaDetailPage';
import { ProjectsOverviewPage } from './pages/ProjectsOverviewPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { MediaPage } from './pages/MediaPage';
import { ContactPage } from './pages/ContactPage';
import { DonateModal } from './components/DonateModal';
import { FOCUS_AREAS, PROJECTS } from './data/websiteData';

export default function App() {
  // Parse initial route from URL hash
  const getInitialPage = () => {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const cleanHash = rawHash.split('?')[0].replace(/\/$/, '');
    if (!cleanHash) return 'home';

    if (cleanHash === 'home') return 'home';
    if (cleanHash === 'about') return 'about';
    if (cleanHash === 'focus-area' || cleanHash === 'focus') return 'focus-area';
    if (cleanHash === 'projects' || cleanHash === 'project-achievements') return 'projects';
    if (cleanHash === 'media') return 'media';
    if (cleanHash === 'contact') return 'contact';

    // Focus area subpages
    if (cleanHash.startsWith('focus/')) {
      const focusId = cleanHash.replace('focus/', '');
      if (focusId === 'area' || !focusId) return 'focus-area';
      const found = FOCUS_AREAS.find((f) => f.id === focusId || f.slug === focusId);
      if (found) return `focus-${found.id}`;
      return 'focus-area';
    }

    // Project subpages
    if (cleanHash.startsWith('project/')) {
      const projId = cleanHash.replace('project/', '');
      if (projId === 'achievements' || !projId) return 'projects';
      const found = PROJECTS.find((p) => p.id === projId || p.slug === projId);
      if (found) return `project-${found.id}`;
      return 'projects';
    }

    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const [donateOpen, setDonateOpen] = useState<boolean>(false);

  // Sync route on hash change
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash safely
    let hash = pageId;
    if (pageId.startsWith('focus-') && pageId !== 'focus-area') {
      hash = `focus/${pageId.replace('focus-', '')}`;
    } else if (pageId.startsWith('project-') && pageId !== 'projects' && pageId !== 'project-achievements') {
      hash = `project/${pageId.replace('project-', '')}`;
    }
    
    if (window.location.hash !== `#${hash}`) {
      window.location.hash = hash;
    }
  };

  // Select focus area detail
  const handleSelectFocus = (id: string) => {
    navigateTo(`focus-${id}`);
  };

  // Select project detail
  const handleSelectProject = (id: string) => {
    navigateTo(`project-${id}`);
  };

  // Find active focus area or project if on detail page
  const activeFocusArea = currentPage.startsWith('focus-') && currentPage !== 'focus-area'
    ? FOCUS_AREAS.find((f) => f.id === currentPage.replace('focus-', ''))
    : null;

  const activeProject = currentPage.startsWith('project-') && currentPage !== 'projects' && currentPage !== 'project-achievements'
    ? PROJECTS.find((p) => p.id === currentPage.replace('project-', ''))
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#123E30] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenDonate={() => setDonateOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectFocus={handleSelectFocus}
            onSelectProject={handleSelectProject}
            onOpenDonate={() => setDonateOpen(true)}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} onOpenDonate={() => setDonateOpen(true)} />}

        {currentPage === 'focus-area' && (
          <FocusAreaOverviewPage onSelectFocus={handleSelectFocus} />
        )}

        {activeFocusArea && (
          <FocusAreaDetailPage
            focusArea={activeFocusArea}
            onBack={() => navigateTo('focus-area')}
            onOpenDonate={() => setDonateOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsOverviewPage onSelectProject={handleSelectProject} onOpenDonate={() => setDonateOpen(true)} />
        )}

        {activeProject && (
          <ProjectDetailPage
            project={activeProject}
            onBack={() => navigateTo('projects')}
            onOpenDonate={() => setDonateOpen(true)}
          />
        )}

        {currentPage === 'media' && <MediaPage onNavigate={navigateTo} />}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} onOpenDonate={() => setDonateOpen(true)} />

      {/* Interactive Charity Donation Modal */}
      <DonateModal
        isOpen={donateOpen}
        onClose={() => setDonateOpen(false)}
      />
    </div>
  );
}
