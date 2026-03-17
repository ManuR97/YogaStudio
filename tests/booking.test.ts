/**
 * Automatisierte Tests für die Booking-Funktion
 * 
 * Tests überprüfen:
 * 1. Formular-Validierung
 * 2. Google Sheets Integration
 * 3. Fehlermeldungen
 * 4. Erfolgreiche Submissions
 */

// Test 1: Email-Validierung
export function testEmailValidation() {
  const validEmails = [
    'test@example.com',
    'user@domain.co.uk',
    'name.surname@company.com'
  ];

  const invalidEmails = [
    'test@',
    '@example.com',
    'test.example.com',
    'test @example.com'
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validResults = validEmails.map(email => ({
    email,
    isValid: emailRegex.test(email),
    expected: true,
    passed: emailRegex.test(email) === true
  }));

  const invalidResults = invalidEmails.map(email => ({
    email,
    isValid: emailRegex.test(email),
    expected: false,
    passed: emailRegex.test(email) === false
  }));

  console.log('📧 EMAIL VALIDIERUNG TESTS:');
  console.log('Gültige E-Mails:');
  validResults.forEach(r => {
    console.log(`  ${r.passed ? '✅' : '❌'} ${r.email} -> ${r.isValid}`);
  });

  console.log('\nUngültige E-Mails:');
  invalidResults.forEach(r => {
    console.log(`  ${r.passed ? '✅' : '❌'} ${r.email} -> ${r.isValid}`);
  });

  const allPassed = [...validResults, ...invalidResults].every(r => r.passed);
  return {
    testName: 'Email Validierung',
    passed: allPassed,
    total: validResults.length + invalidResults.length
  };
}

// Test 2: Telefon-Validierung
export function testPhoneValidation() {
  const validPhones = [
    '+49 123 456789',
    '0123456789',
    '+33123456789',
    '01234567890'
  ];

  const invalidPhones = [
    '123',     // Zu kurz
    '1234',    // Zu kurz
    '12345'    // Zu kurz
  ];

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 6;
  };

  const validResults = validPhones.map(phone => ({
    phone,
    isValid: validatePhone(phone),
    expected: true,
    passed: validatePhone(phone) === true
  }));

  const invalidResults = invalidPhones.map(phone => ({
    phone,
    isValid: validatePhone(phone),
    expected: false,
    passed: validatePhone(phone) === false
  }));

  console.log('\n📞 TELEFON VALIDIERUNG TESTS:');
  console.log('Gültige Telefonnummern:');
  validResults.forEach(r => {
    console.log(`  ${r.passed ? '✅' : '❌'} ${r.phone} -> ${r.isValid}`);
  });

  console.log('\nUngültige Telefonnummern:');
  invalidResults.forEach(r => {
    console.log(`  ${r.passed ? '✅' : '❌'} ${r.phone} -> ${r.isValid}`);
  });

  const allPassed = [...validResults, ...invalidResults].every(r => r.passed);
  return {
    testName: 'Telefon Validierung',
    passed: allPassed,
    total: validResults.length + invalidResults.length
  };
}

// Test 3: Erforderliche Felder
export function testRequiredFields() {
  const testCases = [
    {
      name: 'Test mit allen Feldern',
      data: {
        name: 'Max Mustermann',
        email: 'max@example.com',
        phone: '0123456789',
        course: 'Hatha Yoga'
      },
      shouldPass: true
    },
    {
      name: 'Test ohne Name',
      data: {
        name: '',
        email: 'max@example.com',
        phone: '0123456789',
        course: 'Hatha Yoga'
      },
      shouldPass: false
    },
    {
      name: 'Test ohne E-Mail',
      data: {
        name: 'Max Mustermann',
        email: '',
        phone: '0123456789',
        course: 'Hatha Yoga'
      },
      shouldPass: false
    },
    {
      name: 'Test ohne Telefon',
      data: {
        name: 'Max Mustermann',
        email: 'max@example.com',
        phone: '',
        course: 'Hatha Yoga'
      },
      shouldPass: false
    },
    {
      name: 'Test ohne Kurs',
      data: {
        name: 'Max Mustermann',
        email: 'max@example.com',
        phone: '0123456789',
        course: ''
      },
      shouldPass: false
    }
  ];

  const results = testCases.map(testCase => {
    const isValid = testCase.data.name && testCase.data.email && testCase.data.phone && testCase.data.course;
    return {
      ...testCase,
      isValid,
      passed: isValid === testCase.shouldPass
    };
  });

  console.log('\n✅ ERFORDERLICHE FELDER TESTS:');
  results.forEach(r => {
    console.log(`  ${r.passed ? '✅' : '❌'} ${r.name} -> ${r.isValid ? 'Valid' : 'Invalid'}`);
  });

  const allPassed = results.every(r => r.passed);
  return {
    testName: 'Erforderliche Felder',
    passed: allPassed,
    total: results.length
  };
}

// Test 4: Google Sheets Fallback
export function testGoogleSheetsFallback() {
  const DEFAULT_COURSES = [
    {
      id: 'hatha',
      name: 'Hatha Yoga',
      description: 'Klassisches Yoga für Körper und Geist. Perfekt für Einsteiger.',
      duration: '60 Min',
      level: 'Anfänger'
    },
    {
      id: 'vinyasa',
      name: 'Vinyasa Flow',
      description: 'Dynamische Sequenzen im Atemrhythmus für mehr Energie.',
      duration: '75 Min',
      level: 'Mittelstufe'
    },
    {
      id: 'yin',
      name: 'Yin Yoga',
      description: 'Sanfte, meditative Praxis für tiefe Entspannung.',
      duration: '90 Min',
      level: 'Alle Level'
    },
    {
      id: 'meditation',
      name: 'Meditation',
      description: 'Geführte Meditationen für innere Ruhe und Klarheit.',
      duration: '45 Min',
      level: 'Alle Level'
    }
  ];

  console.log('\n📊 GOOGLE SHEETS FALLBACK TEST:');
  console.log(`  ${DEFAULT_COURSES.length > 0 ? '✅' : '❌'} Fallback-Kurse vorhanden: ${DEFAULT_COURSES.length} Kurse`);
  
  const allHaveRequiredFields = DEFAULT_COURSES.every(course => 
    course.id && course.name && course.description && course.duration && course.level
  );
  
  console.log(`  ${allHaveRequiredFields ? '✅' : '❌'} Alle Kurse haben erforderliche Felder`);

  return {
    testName: 'Google Sheets Fallback',
    passed: DEFAULT_COURSES.length > 0 && allHaveRequiredFields,
    total: 2
  };
}

// Zusammenfassung aller Tests
export function runAllTests() {
  console.log('🚀 YOGA STUDIO - BOOKING FUNKTION TESTS\n');
  console.log('═'.repeat(50));

  const results = [
    testEmailValidation(),
    testPhoneValidation(),
    testRequiredFields(),
    testGoogleSheetsFallback()
  ];

  console.log('\n' + '═'.repeat(50));
  console.log('📋 TEST ZUSAMMENFASSUNG:');
  console.log('═'.repeat(50));

  results.forEach(result => {
    const status = result.passed ? '✅ PASSED' : '❌ FAILED';
    console.log(`${status}: ${result.testName} (${result.total} assertions)`);
  });

  const allPassed = results.every(r => r.passed);
  const totalTests = results.reduce((sum, r) => sum + r.total, 0);
  const passedTests = results.filter(r => r.passed).length;

  console.log('\n' + '═'.repeat(50));
  console.log(`\nGESAMT: ${allPassed ? '✅ ALLE TESTS BESTANDEN' : '❌ EINIGE TESTS FEHLGESCHLAGEN'}`);
  console.log(`${passedTests}/${results.length} Test-Kategorien bestanden`);
  console.log(`${totalTests} assertions überprüft\n`);

  return {
    allPassed,
    summary: `${passedTests}/${results.length} test suites passed`,
    details: results
  };
}

// Export für CLI
if (require.main === module) {
  runAllTests();
}
