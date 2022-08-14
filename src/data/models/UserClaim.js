/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const UserClaim = Model.define('UserClaim', {
  type: {
    type: DataType.STRING,
  },

  value: {
    type: DataType.STRING,
  },
});

export default UserClaim;
