
import React, { useState } from 'react';
import { ViewState, Profile } from './types';
import ProfileSelection from './components/ProfileSelection';
import WelcomeBack from './components/WelcomeBack';
import PinEntry from './components/PinEntry';
import SpecialCards from './components/SpecialCards';
import Layout from './components/Layout';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.PROFILE_SELECTION);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleProfileSelect = (profile: Profile) => {
    setSelectedProfile(profile);
    if (profile.isLocked) {
      setCurrentView(ViewState.PIN_ENTRY);
    } else {
      setCurrentView(ViewState.WELCOME);
    }
  };

  const handlePinSuccess = () => {
    setCurrentView(ViewState.WELCOME);
  };

  const handleStartWatching = () => {
    setCurrentView(ViewState.SPECIAL_CARDS);
  };

  const handleBackToProfiles = () => {
    setSelectedProfile(null);
    setCurrentView(ViewState.PROFILE_SELECTION);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.PROFILE_SELECTION:
        return <ProfileSelection onSelect={handleProfileSelect} />;
      case ViewState.PIN_ENTRY:
        return (
          <PinEntry 
            profile={selectedProfile!} 
            onSuccess={handlePinSuccess} 
            onExit={handleBackToProfiles} 
          />
        );
      case ViewState.WELCOME:
        return (
          <WelcomeBack 
            profile={selectedProfile!} 
            onStart={handleStartWatching} 
            onSwitch={handleBackToProfiles} 
          />
        );
      case ViewState.SPECIAL_CARDS:
        return <SpecialCards cards={selectedProfile?.cards || []} onBack={handleBackToProfiles} />;
      default:
        return <ProfileSelection onSelect={handleProfileSelect} />;
    }
  };

  return (
    <Layout>
      {renderView()}
    </Layout>
  );
};

export default App;
