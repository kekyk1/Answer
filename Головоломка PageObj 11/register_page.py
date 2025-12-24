class RegisterPage:
    def __init__(self, driver):
        self.driver = driver

    def open(self, url):
        self.driver.get(url)

    def enter_name(self, name):
        self.driver.find_element("id", "name").send_keys(name)

    def enter_email(self, email):
        self.driver.find_element("id", "email").send_keys(email)

    def enter_password(self, password):
        self.driver.find_element("id", "password").send_keys(password)

    def submit(self):
        self.driver.find_element("tag name", "button").click()

    def get_success_message(self):
        return self.driver.find_element("class name", "alert").text