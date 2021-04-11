"use strict";
const { Link, UserLink } = require("../../models");

const shortid = require("shortid");

const response = require("../response");

exports.addLink = async (req, res) => {
  const { title, description, link } = req.body;
  const userId = req.userId;
  const imageName = req.files.imageFile[0].filename;

  try {
    // create link default
    const uniqueLink = shortid.generate();

    const addLink = await Link.create({
      title,
      description,
      image: imageName,
      uniqueLink,
      viewCount: 0,
      template: "A1",
      userId: userId,
    });

    if (!addLink) {
      response.error(res, null, 400, "failed add link user");
    }

    const linkId = addLink.id;
    const linkString = JSON.stringify(link);
    const linkParse = JSON.parse(linkString);
    console.log(typeof linkParse);

    try {
      await UserLink.create(linkParse);
    } catch (error) {
      console.log(error);
    }

    // const array = [
    //   { title: "hellooo", url: "www", linkId: linkId },
    //   { title: "hello2", url: "www2", linkId: linkId },
    // ];

    // try {
    //   const add = await UserLink.bulkCreate(array);
    // } catch (error) {
    //   console.log(error);
    // }

    // link.map(async (item) => {
    //   await UserLink.create({
    //     title: item.title,
    //     url: item.url,
    //     linkId,
    //   });
    // });

    const result = {
      link: { addLink },
    };
    response.success(res, result, 200, "Successfully add link user");
  } catch (error) {
    console.log(error);
    response.error(res, null, 400, "failed add link user");
  }
};

exports.getLink = async (req, res) => {
  const userId = req.userId;

  try {
    const getLink = await Link.findAll({ where: { userId } });

    const result = {
      link: getLink,
    };

    response.success(res, result, 200, "Successfully get link user");
  } catch (error) {
    console.log(error);
    response.error(res, null, 400, "failed get link user");
  }
};

exports.getLinkDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const getLink = await Link.findOne({
      include: {
        model: UserLink,
        as: "links",
        attributes: ["title", "url", "image"],
      },
      where: { id },
      attributes: ["title", "description", "image"],
    });

    const result = {
      link: getLink,
    };

    response.success(res, result, 200, "Successfully get detail link user");
  } catch (error) {
    console.log(error);
    response.error(res, null, 400, "failed get detail link user");
  }
};

exports.updateLink = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  try {
    const addLink = await Link.update(
      {
        title,
        description,
      },
      { where: { id } }
    );

    const result = {
      link: addLink,
    };

    response.success(res, result, 200, "Successfully update link user");
  } catch (error) {
    console.log(error);
    response.error(res, null, 400, "failed update link user");
  }
};

exports.updateTemplate = async (req, res) => {
  const { template } = req.body;
  const userId = req.userId;

  try {
    const updateLink = await Link.create(
      {
        template,
      },
      { where: { userId } }
    );

    const result = {
      link: updateLink,
    };

    response.success(res, result, 200, "Successfully template link user");
  } catch (error) {
    console.log(error);
    response.error(res, null, 400, "failed update template link user");
  }
};

exports.ViewCount = async (req, res) => {
  const { id } = req.params;

  try {
    const getViewCount = await Link.findOne({
      where: { id },
      attributes: ["viewCount"],
    });

    const ViewCountUp = getViewCount.viewCount + 1;

    const addLink = await Link.update(
      {
        viewCount: ViewCountUp,
      },
      { where: { id } }
    );

    const result = {
      link: addLink,
    };

    response.success(res, result, 200, "Successfully view link");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteLink = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteLink = await Link.destroy({ where: { id } });

    const result = {
      link: deleteLink,
    };

    response.success(res, result, 200, "Successfully delete link user");
  } catch (error) {
    console.log(error);
    response.error(res, null, 400, "failed delete link user");
  }
};

exports.name = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
