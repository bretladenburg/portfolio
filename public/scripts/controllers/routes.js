'use strict';

page('/about', aboutController.list);
page('/projects', projectController.list);
page('/qualifications', qualificationsController.list);
page('/', homeController.list);
page();
