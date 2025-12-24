from register_page import RegisterPage
from selenium import webdriver

driver = webdriver.Chrome()
page = RegisterPage(driver)

page.open("https://demo-site.com/register")
page.enter_name("Иван")
page.enter_email("ivan@mail.ru")
page.enter_password("qwerty123")
page.submit()

assert page.get_success_message() == "Регистрация завершена!"
driver.quit()