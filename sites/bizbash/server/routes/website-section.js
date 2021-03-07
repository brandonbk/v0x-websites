const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const eventplannerschoiceTemplate = require('../templates/website-section/eventplannerschoice');
const gatherGeeksTemplate = require('../templates/website-section/gathergeeks');
const productionStrategyTemplate = require('../templates/website-section/production-strategy');
const cateringDesignTemplate = require('../templates/website-section/catering-design');
const eventTechVirtualTemplate = require('../templates/website-section/event-tech-virtual');
const supplierDirectory = require('../templates/website-section/supplier-directory');
const venueDirectory = require('../templates/website-section/venue-directory');
const bermudaTemplate = require('../templates/website-section/bermuda');
const industryBuzzTemplate = require('../templates/website-section/industry-buzz');
const localVenuesDestinationsTemplate = require('../templates/website-section/local-venues-destinations');
const bizbashListsTemplate = require('../templates/website-section/bizbash-lists');

module.exports = (app) => {
  app.get('/:alias(supplier-directory)', withWebsiteSection({
    template: supplierDirectory,
    queryFragment,
  }));

  app.get('/:alias(venue-directory)', withWebsiteSection({
    template: venueDirectory,
    queryFragment,
  }));

  app.get('/:alias(gathergeeks)', withWebsiteSection({
    template: gatherGeeksTemplate,
    queryFragment,
  }));

  app.get('/:alias(eventplannerschoice)', withWebsiteSection({
    template: eventplannerschoiceTemplate,
    queryFragment,
  }));

  app.get('/:alias(production-strategy)', withWebsiteSection({
    template: productionStrategyTemplate,
    queryFragment,
  }));

  app.get('/:alias(catering-design)', withWebsiteSection({
    template: cateringDesignTemplate,
    queryFragment,
  }));

  app.get('/:alias(event-tech-virtual)', withWebsiteSection({
    template: eventTechVirtualTemplate,
    queryFragment,
  }));

  app.get('/:alias(local-venues-destinations)', withWebsiteSection({
    template: localVenuesDestinationsTemplate,
    queryFragment,
  }));

  app.get('/:alias(bizbash-lists)', withWebsiteSection({
    template: bizbashListsTemplate,
    queryFragment,
  }));

  app.get('/:alias(bermuda)', withWebsiteSection({
    template: bermudaTemplate,
    queryFragment,
  }));

  app.get('/:alias(industry-buzz)', withWebsiteSection({
    template: industryBuzzTemplate,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
