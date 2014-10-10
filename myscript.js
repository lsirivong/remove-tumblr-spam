// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function () {
	var spam_selectors = [
		'.post.is_recommended',
		'.post.sponsored_post'
	],
	posts = document.querySelectorAll(spam_selectors.join(',')),
	i = 0;

	for (i = 0; i < posts.length; i++) {
		posts[i].remove();
	}
	console.log(i + ' posts removed');
})();

