// src/data/quizData.js

export const QUIZ_QUESTIONS = [
    {
      id: 1,
      question: "Which method is used to find an element by its ID in Selenium (Python)?",
      options: [
        "A. driver.find_element('id', 'example-id')",
        "B. driver.find_element_by_xpath('example-id')",
        "C. driver.switch_to.frame('example-id')",
        "D. driver.wait_for('id', 'example-id')",
      ],
      answer: "A",
    },
    {
      id: 2,
      question: "Which exception typically indicates that an element no longer exists in the DOM?",
      options: [
        "A. NoSuchElementException",
        "B. StaleElementReferenceException",
        "C. ElementNotVisibleException",
        "D. TimeoutException",
      ],
      answer: "B",
    },
    {
      id: 3,
      question: "In Selenium, which of the following is a valid locator strategy?",
      options: [
        "A. driver.find_element_by_css_selector('div#main')",
        "B. driver.identify_element_css('div#main')",
        "C. driver.select_element('div#main')",
        "D. driver.locate_element_css('div#main')",
      ],
      answer: "A",
    },
    // ... Continue adding all 50 multiple-choice Q&A (from the earlier answer set) ...
    {
      id: 50,
      question: "How should you handle an element that appears only after a spinner disappears?",
      options: [
        "A. Click immediately, expecting it will be ready eventually.",
        "B. Use WebDriverWait with invisibility_of_element_located for the spinner, then find the new element.",
        "C. Increase the default wait time to 60 seconds.",
        "D. Switch to a different browser that loads elements faster.",
      ],
      answer: "B",
    },
  ];
  