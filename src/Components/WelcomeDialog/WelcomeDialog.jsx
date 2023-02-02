function WelcomeDialog() {
    return (
      <SplitPane
        left={
          <Navbar />
        }
        right={
          <Browser />
        } />
    );
  }
  export default WelcomeDialog;