export default {
  sizes: {
    inputHeight: 40,
    inputWidth: '100%',
    inputGutterBottom: 30,
    inputSidePaddings: 10,
    labelGutterBottom: 10,
    narrowInputWidth: 140,
    inlineLabelWidth: 130,
    borderRadius: 0,
    borderWidth: 1,
    formRowGutter: 50,
    formActionsDistance: 60,
    onlyBottomBorder: false,
    moveAddonToLeft: false,
    addonSpacing: 10,
  },

  colors: {
    accent: '#1fc59c',
    inputText: '#3d4348',
    inputBorder: '#e6edf4',
    inputBg: 'white',
    inputFocusShadow: 'none',
    label: 'inherit',
    fill: '#e6edf4',
    placeholder: '#c3d4e4',
    success: '#00a651',
    error: '#e50038',
  },

  typography: {
    inputFontSize: 16,
    inputFontWeight: 'normal',
    labelFontSize: 14,
    labelFontWeight: 'normal',
    helpFontSize: 12,
  },

  breakpoints: {
    xs: 0, // Extra small screen / phone
    sm: '768px', // Small screen / tablet
    md: '1000px', // Medium screen / desktop
    lg: '1400px', // Large screen / wide desktop
  },

  textLabels: {
    formInvalid: 'Form contains errors. Check all fields.',
    requiredField: 'This field is required.',
    minChars: 'This field should have at least :length: characters.',
    passwordInvalid: 'Password should be at least 6 characters long.',
    emailInvalid: 'This is not a valid email address.',
    urlInvalid: 'This is not a valid URL.',
    phoneInvalid: 'This is not a valid phone number.',
    postCodeInvalid: 'This is not a valid postal code.',
    jsonInvalid: 'Enter a valid JSON.',
  },

  toastContainerProps: {
    hideProgressBar: true,
    autoClose: 5000,
  },
}
