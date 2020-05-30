class API {
  async get(url) {
    let ard = await fetch(url);
    let data = await ard.json();
    return data;
  }
}
