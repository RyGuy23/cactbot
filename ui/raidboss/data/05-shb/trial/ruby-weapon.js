'use strict';

[{
  zoneRegex: {
    en: /^Cinder Drift$/,
  },
  timelineFile: 'ruby-weapon.txt',
  timelineTriggers: [
    {
      id: 'Ruby Magitek Meteor Behind',
      regex: /Magitek Meteor/,
      beforeSeconds: 4,
      alertText: {
        en: 'Hide Behind Meteor',
        de: 'Hinter Meteor verstecken',
        fr: 'Cacher derrière le météore',
        ko: '운석 뒤에 숨기',
        ja: 'コメットの後ろへ',
        cn: '躲在陨石后',
      },
    },
    {
      id: 'Ruby Magitek Meteor Away',
      regex: /Burst/,
      beforeSeconds: 1,
      infoText: {
        en: 'Away From Meteor',
        de: 'Weg vom Meteor',
        fr: 'Loin du météore',
        ko: '운석에게서 멀어지기',
        ja: 'コメットから離れ',
        cn: '远离陨石',
      },
    },
  ],
  triggers: [
    {
      id: 'Ruby Optimized Ultima',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4AA8', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4AA8', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4AA8', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4AA8', capture: false }),
      condition: function(data) {
        return data.role == 'healer' || data.role == 'tank' || data.CanAddle();
      },
      response: Responses.aoe(),
    },
    {
      id: 'Ruby Stamp',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4AC7' }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4AC7' }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4AC7' }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4AC7' }),
      condition: function(data) {
        return data.role == 'tank' || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'Ruby Undermine',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4A97', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4A97', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4A97', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4A97', capture: false }),
      infoText: {
        en: 'Away from Lines',
        de: 'Weg von den Linien',
        fr: 'En dehors des sillons',
        ko: '선 피하기',
        ja: '線から離れ',
        cn: '远离线',
      },
    },
    {
      id: 'Ruby Liquefaction',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4A96', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4A96', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4A96', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4A96', capture: false }),
      alertText: {
        en: 'Get On Lines',
        de: 'Auf die Linien gehen',
        fr: 'Sur les sillons',
        ko: '선 위로 올라가기',
        ja: '線の上へ',
        cn: '靠近线',
      },
    },
    {
      id: 'Ruby Ruby Ray',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4AC6', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4AC6', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4AC6', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4AC6', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'Ruby High-Powered Homing Lasers You',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4AC5' }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4AC5' }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4AC5' }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4AC5' }),
      condition: Conditions.targetIsYou(),
      response: Responses.stackOn('alert'),
    },
    {
      id: 'Ruby High-Powered Homing Lasers',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4AC5' }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4AC5' }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4AC5' }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4AC5' }),
      condition: Conditions.targetIsNotYou(),
      response: Responses.stack('info'),
    },
    {
      id: 'Ruby Dynamics',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4AA0', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4AA0', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4AA0', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4AA0', capture: false }),
      response: Responses.getUnder(),
    },
    {
      id: 'Ruby Homing Laser',
      regex: Regexes.headMarker({ id: '008B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      // Enrage can start casting before Ruby Weapon has finished their rotation
      // Give a friendly reminder to pop LB3 if you haven't already
      id: 'Ruby Optimized Ultima Enrage',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4AA9', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4AA9', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4AA9', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4AA9', capture: false }),
      infoText: {
        en: 'Enrage!',
        de: 'Finalangriff!',
        fr: 'Enrage !',
        ko: '전멸기!',
        ja: '時間切れ！',
        cn: '狂暴',
      },
    },
    {
      id: 'Ruby Meteor Stream',
      regex: Regexes.headMarker({ id: '00E0' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Ruby Ruby Claw',
      regex: Regexes.startsUsing({ source: 'Raven\'s Image', id: '4ABF' }),
      regexDe: Regexes.startsUsing({ source: 'Naels Trugbild', id: '4ABF' }),
      regexFr: Regexes.startsUsing({ source: 'Spectre De Nael', id: '4ABF' }),
      regexJa: Regexes.startsUsing({ source: 'ネールの幻影', id: '4ABF' }),
      condition: function(data, matches) {
        if (data.role != 'healer' || data.role != 'tank')
          return false;
        if (data.colors[data.me] == data.colors[matches.target])
          return true;
      },
      suppressSeconds: 1,
      response: Responses.tankBuster(),
    },
    {
      id: 'Ruby Bradamante',
      regex: Regexes.headMarker({ id: '0017' }),
      condition: Conditions.targetIsYou(),
      infoText: {
        en: 'Avoid meteors with laser',
        de: 'Meteore mit Laser vermeiden',
        fr: 'Évitez les météores avec votre laser',
        ko: '레이저 대상자 - 탱커 피하기',
        ja: 'レザーを避け',
        cn: '躲开激光点名',
      },
    },
    {
      id: 'Ruby Outrage',
      regex: Regexes.startsUsing({ source: 'The Ruby Weapon', id: '4AC8', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Rubin-Waffe', id: '4AC8', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Arme Rubis', id: '4AC8', capture: false }),
      regexJa: Regexes.startsUsing({ source: 'ルビーウェポン', id: '4AC8', capture: false }),
      condition: function(data) {
        return data.role == 'healer' || data.role == 'tank' || data.CanAddle();
      },
      response: Responses.aoe(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'missingTranslations': true,
      'replaceSync': {
        'The Ruby Weapon': 'Rubin-Waffe',
        'Raven\'s Image': 'Naels Trugbild',
        'Comet': 'Komet',
      },
      'replaceText': {
        'Undermine': 'Untergraben',
        'Stamp': 'Zerstampfen',
        'Spike of Flame': 'Flammenstachel',
        'Ruby Sphere': 'Rubin-Sphäre',
        'Ruby Ray': 'Rubin-Strahl',
        'Ruby Dynamics': 'Rubin-Dynamo',
        'Retract': 'Einziehen',
        'Ravensflight': 'Flug des Raben',
        'Ravensclaw': 'Rabenklauen',
        'Optimized Ultima': 'Ultima-System',
        'Magitek Ray': 'Magitek-Laser',
        'Magitek Charge': 'Magitek-Sprengladung',
        'Magitek Bit': 'Magitek-Bit',
        'Liquefaction': 'Verflüssigen',
        '(?<! )Homing Lasers': 'Leitlaser',
        'High-powered Homing Lasers': 'Hochenergie-Leitlaser',
        'Helicoclaw': 'Spiralklauen',
        'Flexiclaw': 'Flex-Klauen',
        'Cut and Run': 'Klauensturm',
        'Meteor Project': 'Projekt Meteor',
        'Negative Personae': 'Persona Negativa',
        'Meteor Stream': 'Meteorflug',
        'Ruby Claw': 'Rubin-Klauen',
        'Dalamud Impact': 'Dalamud-Sturz',
        'Magitek Comet': 'Magitek-Komet',
        'Outrage': 'Empörung',
        'Landing': 'Einschlag',
        'Magitek Meteor': '',
        'Burst': 'Magitek-Meteor',
        'Bradamante': 'Bradamante',
        '--cutscene--': '--Zwischensequenz--',
      },
      '~effectNames': {
        'Magic Vulnerability Up': 'Erhöhte Magie-Verwundbarkeit',
        'Burns': 'Brandwunde',
        'Brink of Death': 'Sterbenselend',
        'Blunt Resistance Down': 'Schlagresistenz -',
        '6 Fulms Under': 'Versinkend',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'The Ruby Weapon': 'Arme Rubis',
      },
      'replaceText': {
        'Undermine': 'Griffe souterraine',
        'Stamp': 'Piétinement sévère',
        'Spike of Flame': 'Explosion de feu',
        'Ruby Sphere': 'Sphère rubis',
        'Ruby Ray': 'Rayon rubis',
        'Ruby Dynamics': 'Générateur rubis',
        'Retract': 'Rétraction',
        'Ravensflight': 'Vol du rapace',
        'Ravensclaw': 'Griffes du rapace',
        'Outrage': 'Indignation',
        'Optimized Ultima': 'Ultima magitek',
        'Magitek Ray': 'Laser magitek',
        'Magitek Charge': 'Éthéroplasma magitek',
        'Magitek Bit': 'Éjection de drones',
        'Liquefaction': 'Sables mouvants',
        '(?<! )Homing Lasers': 'Lasers autoguidés',
        'High-powered Homing Lasers': 'Lasers autoguidés surpuissants',
        'Helicoclaw': 'Héliogriffes',
        'Flexiclaw': 'Flexigriffes',
        'Cut and Run': 'Ruée de griffes',
      },
      '~effectNames': {
        'Magic Vulnerability Up': 'Vulnérabilité magique augmentée',
        'Burns': 'Brûlure',
        'Brink of Death': 'Mourant',
        'Blunt Resistance Down': 'Résistance au contondant réduite',
        '6 Fulms Under': 'Enfoncement',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'The Ruby Weapon': 'ルビーウェポン',
        'Raven\'s Image': 'ネールの幻影',
        'Comet': 'コメット',
      },
      'replaceText': {
        '--cutscene--': '--カットシン--',
        'Undermine': 'クローマイン',
        'Stamp': 'ストンピング',
        'Spike of Flame': '爆炎',
        'Ruby Sphere': 'ルビースフィア',
        'Ruby Ray': 'ルビーレイ',
        'Ruby Dynamics': 'ルビーダイナモ',
        'Retract': '引き抜く',
        'Ravensflight': 'レイヴェンダイブ',
        'Ravensclaw': 'レイヴェンクロー',
        'Optimized Ultima': '魔導アルテマ',
        'Magitek Ray': '魔導レーザー',
        'Magitek Charge': '魔導爆雷',
        'Magitek Bit': 'ビット射出',
        'Liquefaction': 'リクェファクション',
        '(?<! )Homing Lasers': '誘導レーザー',
        'High-powered Homing Lasers': '高出力誘導レーザー',
        'Helicoclaw': 'スパイラルクロー',
        'Flexiclaw': 'フレキシブルクロー',
        'Cut and Run': 'クロースラッシュ',
        'Meteor Project': 'メテオ計劃',
        'Negative Personae': 'ネガティブペルソナ',
        'Meteor Stream': 'メテオストリーム',
        'Ruby Claw': 'ルビークロー',
        'Dalamud Impact': 'ダラガブインパクト',
        'Magitek Comet': '魔導コメット',
        'Landing': '落着',
        'Magitek Meteor': '魔導メテオ',
        'Burst': '大爆発',
        'Bradamante': 'ブラダマンテ',
        'Outrage': 'アウトレイジ',
      },
      '~effectNames': {
        'Magic Vulnerability Up': '被魔法ダメージ増加',
        'Burns': '火傷',
        'Brink of Death': '衰弱［強］',
        'Blunt Resistance Down': '打属性耐性低下',
        '6 Fulms Under': '沈下',
      },
    },
  ],
}];
