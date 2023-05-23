function Header() {
  return (
    <>
      <header class="bg-gray-800 text-gray-100">
        <div class="container mx-auto px-4 py-6">
          <nav class="flex items-center justify-between">
            <div class="flex items-center">
              <a href="/" class="text-lg font-semibold">
                Logo
              </a>
            </div>
            <div class="flex items-center">
              <a href="/public" class="mr-4">
                Home
              </a>
              <a href="/public/about" class="mr-4">
                About
              </a>
              <a href="/public/services" class="mr-4">
                Services
              </a>
              <a href="/public/contacts" class="mr-4">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
