function goToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Section not found:', sectionId);
    }
  }
  function hideSignUp() {
    document.getElementById('signUpBtn').style.display = 'none';
  }