<template>
  <div class="footer">
    <div class="container">
      <footer class="py-5" style="padding-bottom: 1rem !important">
        <div class="row">
          <div class="col-md-5 links footer_block">
            <img src="https://static.ticimax.cloud/52168/Uploads/EditorUploads/suud-image/logo.svg" height="50 px" width="160px" />
            <br />
<br>
            <p>
              Telefon Numaralarımız
              <br>

              <br />(+216) 54 819 819 <br />(+216) 54 819 817
            </p>
          </div>

          <div class="col">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Anasayfa</a>
              </li>
              <li class="nav-item mb-2">
                <a href="Features" class="nav-link p-0 text-muted">Yenilikler</a>
              </li>
              <li class="nav-item mb-2">
                <a href="Pricing" class="nav-link p-0 text-muted">Ödüller</a>
              </li>
              <li class="nav-item mb-2">
                <a href="FAQs" class="nav-link p-0 text-muted">SSS</a>
              </li>
              <li class="nav-item mb-2">
                <a href="bout" class="nav-link p-0 text-muted">Hakkımızda</a>
              </li>
            </ul>
          </div>

          <div class="col">
            <form>
              <h5>Yeniliklerden Haberdar Ol</h5>
              <p></p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden"
                  >Mail Adresi</label
                >
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  style="height: 38px; background-color: #39b5ff"
                >
                  Katıl
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          class="
            d-flex
            flex-column flex-sm-row
            justify-content-between
            py-4
            my-4
            border-top
          "
        >
          <p style="padding-left: 35%">
            &copy; 2022 Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
<style>
.footer {
  background: #f4f5f6;
}
.py-5 {
  padding-top: 4rem !important;
  padding-bottom: 0rem !important;
}
</style>