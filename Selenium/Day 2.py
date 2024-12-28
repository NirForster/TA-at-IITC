element = driver.find_element("id", "submit-button")


# ----


elements = driver.find_elements("class_name", "nav-item")

#-----------------------------------------------

from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://atid.store/")

# Locate a button by ID
button = driver.find_element("id", "submit-button")
print("Button Text:", button.text)

# Locate a link by link text
link = driver.find_element("link_text", "Home")
print("Link Href:", link.get_attribute("href"))

# Locate a text input by name
input_field = driver.find_element("name", "search")
print("Input Placeholder:", input_field.get_attribute("placeholder"))

driver.quit()

# -----------------------------------------------

# Locate a navigation link using CSS Selector
nav_link = driver.find_element("css_selector", "nav > ul > li.active > a")

# Locate an input field by attribute
search_input = driver.find_element("css_selector", "input[name='search']")


