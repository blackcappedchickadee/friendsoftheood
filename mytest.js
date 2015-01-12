module.exports = {

	'Lets test some Github functionality' : function(test) {
		test.open('https://github.com')
			.screenshot('github.png')
			.assert.exists('a[href="/contact"]', 'Contact link exists')
			.click('a[href="/contact"]')
			.screenshot('contact.png')

			.assert.title().is('Contact GitHub · GitHub', 'Contact page reached')
			.type('#form_name', 'The Doctor')
			.type('#form_email', 'test@test.org')
			.type('#form_subject', 'Exterminate!')
			.type('#form_comments', 'Exterminate all the bugs!')
			.click('#form_shop') //selects a checkbox on the form
			.screenshot('filled_form.png')

			//.submit() //dont pollute github

			.back()
			.assert.text('.marketing-header h1', 'Why you’ll love GitHub.', 'Love love...')
			.forward()
			.assert.text('h1', 'Contact GitHub', 'Wibbly wobbly')

			.done();
	}
};