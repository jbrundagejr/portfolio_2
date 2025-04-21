export const createSEOMeta = (project) => {
    return [
      {
        hid: "og:title",
        property: "og:title",
        content: project.title,
      },
      {
        hid: "title",
        name: "title",
        content: project.title,
      },
      {
        hid: "description",
        name: "description",
        content: project.notes,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: project.notes,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: project.image,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://jonbrundagejr.com",
      },
    ];
  }