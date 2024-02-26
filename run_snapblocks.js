mw.hook('wikipage.content').add(function run_snapblocks() {
	var version = mw.config.get('wgSnapBlocksBlockVersion');
	var scale = 1;
	// Note: the weak equality is intentional to allow '3' and 3 both specify sb3
	if (version == 3 || version[0] == '3') {
		version = (version === 'hc-3' || version === 'hc-3.0') ? 'scratch3-high-contrast' : 'scratch3';
		scale = 0.675;
	} else if (version == 2 || version[0] == '2') { // to handle '2.0'
		version = 'scratch2';
	} else {
		version = version === 'snap-flat' ? 'snap-flat' : 'snap';
	}
	var langs = ['en'].concat(mw.config.get('wgSnapBlocksLangs'));
	snapblocks.renderMatching('pre.blocks', { languages: langs, style: version, scale: scale });
	snapblocks.renderMatching('code.blocks', { languages: langs, style: version, inline: true, scale: scale });
	snapblocks.renderMatching('pre[class^=blocks-hc-3]', { languages: langs, style: 'scratch3-high-contrast', scale: 0.675 });
	snapblocks.renderMatching('code[class^=blocks-hc-3]', { languages: langs, style: 'scratch3-high-contrast', inline: true, scale: 0.675 });
	snapblocks.renderMatching('pre[class^=blocks-3]', { languages: langs, style: 'scratch3', scale: 0.675 });
	snapblocks.renderMatching('code[class^=blocks-3]', { languages: langs, style: 'scratch3', inline: true, scale: 0.675 });
	snapblocks.renderMatching('pre[class^=blocks-2]', { languages: langs, style: 'scratch2' });
	snapblocks.renderMatching('code[class^=blocks-2]', { languages: langs, style: 'scratch2', inline: true });
	snapblocks.renderMatching('pre[class^=blocks-snap]', { languages: langs, style: 'snap' });
	snapblocks.renderMatching('code[class^=blocks-snap]', { languages: langs, style: 'snap', inline: true });
	snapblocks.renderMatching('pre[class^=blocks-snap-flat]', { languages: langs, style: 'snap' });
	snapblocks.renderMatching('code[class^=blocks-snap-flat]', { languages: langs, style: 'snap', inline: true });
});
