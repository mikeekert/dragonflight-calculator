import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Specs } from '../models/specs';
import { ITalent } from '../models/talent';

@Injectable({
  providedIn: 'root'
})
export class TalentsService {
  counterObservable = new BehaviorSubject<number>(this.pointCounter);
  talentsSelectedObservable = new BehaviorSubject<number[]>(this.talentsSelected);

  constructor() {
  }

  private _pointCounter = 0;
  get pointCounter(): number {
    return this._pointCounter;
  }

  set pointCounter(value: number) {
    this._pointCounter = value;
    this.counterObservable.next(value);
  }

  private _talentsSelected: number[] = [];
  get talentsSelected(): number[] {
    return this._talentsSelected;
  }

  set talentsSelected(value: number[]) {
    this._talentsSelected = value;
    this.talentsSelectedObservable.next(value);
  }

  addTalent(id: number) {
    if (!this.talentsSelected.includes(id)) {
      this.talentsSelected = [...this.talentsSelected, id];
    }
  }

  removeTalent(id: number) {
    this.talentsSelected = this.talentsSelected.filter(talent => talent !== id);
  }

  generateTalentList(spec?: Specs): ITalent[][][] {
    return [
      [
        [{
          id: 0,
          name: 'Chains of Ice',
          iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_frost_chainsofice.jpg',
          maxLevel: 1,
          requiredTotalPoints: 0,
          requiredTalents: [],
          parentNodeOf: [1],
          tooltip: 'Shackles the target with frozen chains, reducing movement speed by 70% for 8 seconds.'
        }],
        [{
          id: 1,
          name: 'Mind Freeze',
          iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_mindfreeze.jpg',
          maxLevel: 1,
          requiredTotalPoints: 0,
          requiredTalents: [0],
          parentNodeOf: [2, 13],
          tooltip: 'Smash the target\s mind with cold, interrupting spellcasting and preventing them from casting spells for 3 seconds.'
        }],
        [{
          id: 2,
          name: 'Icebound Fortitude',
          iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_iceboundfortitude.jpg',
          maxLevel: 1,
          requiredTotalPoints: 0,
          requiredTalents: [1],
          parentNodeOf: [3, 5],
          tooltip: 'Your blood freezes, granting immunity to Stun effects and reducing damage taken by 30% for 8 seconds.',
        }],
        [{
          id: 3,
          name: 'Blinding Sleet',
          iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_frost_chillingblast.jpg',
          maxLevel: 1,
          requiredTotalPoints: 0,
          requiredTalents: [2],
          parentNodeOf: [],
          tooltip: 'Targets in a cone in front of you are blinded, causing them to wander disoriented for 5 seconds. Damage may cancel the effect.  When Blinding Sleet ends, enemies are slowed by 50% for 6 seconds.',
          iconAlignment: 'left'
        },
          {
            id: 4,
            name: 'Permafrost',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/achievement_zone_frostfire.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [13],
            parentNodeOf: [],
            shape: 'round',
            tooltip: 'Your auto attack damage grants you an absorb shield equal to 40% of the damage dealt.',
          }],
        [
          {
            id: 5,
            name: 'Merciless Strikes',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
            maxLevel: 2,
            requiredTotalPoints: 8,
            requiredTalents: [2],
            parentNodeOf: [6, 7, 8],
            tooltip: 'Increase Critical Strike chance by [2/4]%.',
            shape: 'round',
          }
        ],
        [
          {
            id: 6,
            name: 'Proliferating Chill',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_frost_chainsofice.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [5],
            parentNodeOf: [9],
            tooltip: 'Chains of Ice affects 1 additional enemy.',
            shape: 'round',
          },
          {
            id: 7,
            name: 'Choice Node',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_rune.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [5],
            parentNodeOf: [9],
            tooltip: `Runic Empowerment: Each Runic Power you spend has a 2.0% chance to instantly grant you a Rune.<br/>
          <br/>
          OR<br/>
          <br/>Runic Corruption: Each Runic Power you spend has a 1.6% chance to increase your Rune regeneration rate by 100% for 3 seconds.`,
            shape: 'hexagon'
          },
          {
            id: 8,
            name: 'Anticipation',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_mindfreeze.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [5],
            parentNodeOf: [9],
            tooltip: 'Successfully interrupting an enemy with Mind Freeze grants 10 Runic Power and reduces its cooldown by 3 seconds.',
            shape: 'round',
          }
        ],
        [
          {
            id: 9,
            name: 'Acclimation',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_iceboundfortitude.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [6, 7, 8],
            parentNodeOf: [10, 14],
            tooltip: 'Icebound Fortitude\'s cooldown is reduced by 60 seconds.',
            shape: 'round',
          }
        ],
        [
          {
            id: 10,
            name: 'Icy Talons',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_icytalons.jpg',
            maxLevel: 3,
            requiredTotalPoints: 20,
            requiredTalents: [9],
            parentNodeOf: [11, 12],
            tooltip: 'Your Runic Power spending abilities increase your melee attack speed by [2/4/6%] for 6 seconds, stacking up to 3 times.',
            shape: 'round',
          }
        ],
        [
          {
            id: 11,
            name: 'Rune Attenuation',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/boss_odunrunes_blue.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [10],
            parentNodeOf: [],
            tooltip: 'Auto attacks have a chance to generate 5 Runic Power.',
            shape: 'round',
            iconAlignment: 'left'
          }
        ],
        [
          {
            id: 12,
            name: 'Empower Rune Weapon',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/inv_sword_62.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [10],
            parentNodeOf: [],
            tooltip: 'Empower your rune weapon, gaining 15% Haste and generating 1 Rune and 5 Runic Power instantly and every 5 sec for 20 seconds. If Empower Rune Weapon is not talented elsewhere on the tree, this grants 1 charge of Empower Rune Weapon.',
          }
        ]
      ],
      [
        [],
        [],
        [{
          id: 13,
          name: 'Blood Scent',
          iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
          maxLevel: 1,
          requiredTotalPoints: 0,
          requiredTalents: [1, 17],
          parentNodeOf: [4, 19],
          tooltip: 'Increase leech by 3%.',
          shape: 'round',
        }
        ],
        [],
        [],
        [],
        [],
        [
          {
            id: 14,
            name: 'Horn of Winter',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/inv_misc_horn_02.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [9],
            parentNodeOf: [15],
            tooltip: 'Blow the Horn of Winter, gaining 2 Runes and generating 25 Runic Power.',
          }
        ],
        [
          {
            id: 15,
            name: 'Rune Mastery',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/ability_deathknight_hungeringruneblade.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [14],
            parentNodeOf: [],
            tooltip: 'Consuming a Rune has a chance to increase your Strength by 6% for 6 seconds.',
            shape: 'round',
          }
        ]
      ],
      [
        [
          {
            id: 16,
            name: 'Death Strike',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_butcher2.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [],
            parentNodeOf: [17],
            tooltip: `Focuses dark power into a strike that deals Physical damage and heals you for a percentage of all
            damage taken in the last 5 seconds. <br/></br> Granted by default when selecting Blood Specialization.`,
          }
        ],
        [
          {
            id: 17,
            name: 'Anti-Magic Shell',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_antimagicshell.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [16],
            parentNodeOf: [13, 18, 28],
            tooltip: 'Surrounds you in an Anti-Magic Shell for 5 sec, absorbing a large amount of magic damage and preventing application of harmful magical effects. Damage absorbed generates Runic Power.'
          }
        ],
        [
          {
            id: 18,
            name: 'Veteran of the Third War',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_misc_warsongfocus.jpg',
            maxLevel: 2,
            requiredTotalPoints: 0,
            requiredTalents: [17],
            parentNodeOf: [21],
            tooltip: 'Blood: Stamina increased by [10/20]%.<br><br>Frost &amp; Unholy: Stamina increased by [5/10]% Rank Two Talent.',
            shape: 'round',
          }
        ],
        [
          {
            id: 19,
            name: 'Death Pact',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_deathpact.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [13],
            parentNodeOf: [],
            tooltip: 'Create a death pact that heals you for 50% of your maximum health, but absorbs incoming healing equal to 30% of your max health for 15 seconds.',
          },
          {
            id: 20,
            name: 'Wraith Walk',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/inv_helm_plate_raiddeathknight_p_01.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [28],
            parentNodeOf: [],
            tooltip: 'Embrace the power of the Shadowlands, removing all root effects and increasing your movement speed by 70% for 4 seconds.' +
              ' Taking any action cancels the effect. While active, your movement speed cannot be reduced below 170%.',
          }
        ],
        [
          {
            id: 21,
            name: 'Anti-Magic Zone',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_antimagiczone.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [18],
            parentNodeOf: [22, 23, 24],
            tooltip: 'Increases the damage absorbed by your Anti-Magic Zone by 20%.',
          }
        ],
        [
          {
            id: 22,
            name: 'Asphyxiate',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/ability_deathknight_asphixiate.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [21],
            parentNodeOf: [25],
            tooltip: 'Lifts the enemy target off the ground, crushing their throat with dark energy and stunning them for 5 seconds.',
          },
          {
            id: 23,
            name: 'Deaths Advance',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_demonicempathy.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [21],
            parentNodeOf: [25],
            tooltip: 'For 8 sec, your movement speed is increased by 30%,' +
              'you cannot be slowed below 100% of normal speed, and you are immune to forced movement ' +
              'effects and knockbacks. Passive: You cannot be slowed below 70% of normal speed.',
          },
          {
            id: 24,
            name: 'Anti-Magic Barrier',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_antimagicshell.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [21],
            parentNodeOf: [25],
            tooltip: 'Reduces the cooldown of Anti-Magic Shell by 20 sec and increases its duration and amount absorbed by 40%.',
            shape: 'round',
          },
        ],
        [
          {
            id: 25,
            name: 'Assimilation',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_antimagiczone.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [22, 23, 24],
            parentNodeOf: [29, 26, 14],
            tooltip: 'The amount absorbed by Anti-Magic Zone is increased by 10% and grants up to 100 Runic Power based on the amount absorbed.',
            shape: 'round',
          }
        ],
        [
          {
            id: 26,
            name: 'Improved Death Strike [NNF]',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_butcher2.jpg',
            maxLevel: 3,
            requiredTotalPoints: 20,
            requiredTalents: [25],
            parentNodeOf: [27],
            tooltip: 'Death Strike\'s cost is reduced by 10, and its healing is increased by [3/6/10]% for Blood specialization and [20/40/60]% for Frost and Unholy specialization.',
            shape: 'round',
          }
        ],
        [],
        [
          {
            id: 27,
            name: 'Abomination Limb',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/ability_maldraxxus_deathknight.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [26],
            parentNodeOf: [],
            tooltip: 'Sprout an additional limb, dealing Shadow damage over 12 sec to all nearby enemies. ' +
              'Deals reduced damage beyond 5 targets. Every 1 sec, an enemy is pulled to your location if they are ' +
              'further than 8 yds from you. The same enemy can only be pulled once every 4 seconds. ' +
              'Gain Runic Corruption instantly, and again every 6 seconds.'
          }
        ]
      ],
      [
        [],
        [],
        [
          {
            id: 28,
            name: 'Supression',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [17],
            parentNodeOf: [20, 34],
            tooltip: 'Increases Avoidance by 3%.',
            shape: 'round',
          }
        ],
        [],
        [],
        [],
        [],
        [
          {
            id: 29,
            name: 'Will of the Necropolis',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/achievement_boss_kelthuzad_01.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [25],
            parentNodeOf: [30],
            tooltip: 'Damage taken below 30% Health is reduced by 30%.',
            shape: 'round',
          }
        ],
        [
          {
            id: 30,
            name: 'Blood Draw',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/inv_artifact_bloodoftheassassinated.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [29],
            parentNodeOf: [],
            tooltip: 'When you fall below 30% health you drain health from nearby enemies. Can only occur every 3 minutes.',
            shape: 'round',
          }
        ]
      ],
      [
        [
          {
            id: 31,
            name: 'Raise Dead',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_animatedead.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [],
            parentNodeOf: [32],
            tooltip: 'Raises a ghoul to fight by your side. You can have a maximum of one ghoul at a time. ' +
              'Lasts 1 minute.<br><br>Granted by default when selecting Unholy Specialization.',
          }
        ],
        [
          {
            id: 32,
            name: 'Improved Death and Decay [NNF]',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_deathanddecay.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [31],
            parentNodeOf: [33, 28],
            tooltip: 'Blood: Heart Strike hits 3 additional enemies while you remain in Death and Decay.' +
              '<br><br>Frost: Obliterate hits 1 additional enemy while you remain in Death and Decay.' +
              '<br><br>Unholy: Scourge Strike hits 5 additional enemies while you remain in Death and Decay.',
            shape: 'round',
          }
        ],
        [
          {
            id: 33,
            name: 'Brittle',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_deathknight_explode_ghoul.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [32],
            parentNodeOf: [35, 36],
            tooltip: 'Your diseases have a chance to weaken your enemy causing your attacks against them to deal 6% increased damage for 5 seconds.',
            shape: 'round',
          }
        ],
        [
          {
            id: 34,
            name: 'Sacrificial Pact',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_corpseexplode.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [28],
            parentNodeOf: [],
            tooltip: 'Sacrifice your ghoul to deal Shadow damage to all nearby enemies and heal for 25% of your maximum health. Deals reduced damage beyond 8 targets.',
          },
          {
            id: 35,
            name: 'Unholy Ground',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/ability_deathknight_desecratedground.jpg',
            maxLevel: 1,
            requiredTotalPoints: 0,
            requiredTalents: [33],
            parentNodeOf: [],
            tooltip: 'Gain 5% Haste while you remain within your Death and Decay.',
            shape: 'round',
          }
        ],
        [
          {
            id: 36,
            name: 'Might of Thassian',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_chargepositive.jpg',
            maxLevel: 2,
            requiredTotalPoints: 8,
            requiredTalents: [33],
            parentNodeOf: [37, 38, 39],
            tooltip: 'Increases Strength by [2/4]%.',
            shape: 'round',
          }
        ],
        [
          {
            id: 37,
            name: 'Control Undead',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/inv_misc_bone_skull_01.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [36],
            parentNodeOf: [40],
            tooltip: 'Dominates the target undead creature up to level 61, forcing it to do your bidding for 5 minutes.',
          },
          {
            id: 38,
            name: 'Choice Node',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/ability_deathknight_aoedeathgrip.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [36],
            parentNodeOf: [40],
            tooltip: '<b>Death\'s Reach</b>: Increases the range of Death Grip by 10 yds. ' +
              'Killing an enemy that yields experience or honor resets the cooldown of Death Grip.<br><br>' +
              'OR<br><br><b>Grip of the Dead</b>: Death and Decay reduces the movement speed of enemies ' +
              'within its area by 90%, decaying by 10% every seconds.',
            shape: 'hexagon'
          },
          {
            id: 39,
            name: 'Enfeeble',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/ability_creature_poison_01.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [36],
            parentNodeOf: [40],
            tooltip: 'Your ghoul’s attacks have a chance to apply Enfeeble, ' +
              'reducing the target’s movement speed by 30% and the damage they deal to you by 15% for 6 seconds.',
            shape: 'round'
          }
        ],
        [
          {
            id: 40,
            name: 'Lichborne',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/spell_shadow_lifedrain.jpg',
            maxLevel: 1,
            requiredTotalPoints: 8,
            requiredTalents: [37, 38, 39],
            parentNodeOf: [41, 29],
            tooltip: 'Draw upon unholy energy to become Undead for 10 sec, increasing Leech by 10%, ' +
              'and making you immune to Charm, Fear, and Sleep.'
          }
        ],
        [
          {
            id: 41,
            name: 'Unholy Bond',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/inv_glove_plate_challengedeathknight_d_01.jpg',
            maxLevel: 3,
            requiredTotalPoints: 20,
            requiredTalents: [40],
            parentNodeOf: [42, 43],
            tooltip: 'Increases the effectiveness of your Runeforge effects by [10/20/30]%.',
            shape: 'round'
          }
        ],
        [
          {
            id: 42,
            name: 'Death\'s Echo',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/inv_fabric_ebonweave.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [41],
            parentNodeOf: [],
            tooltip: 'Death\'s Advance, Death and Decay, and Death Grip have 1 additional charge.',
            shape: 'round',
            iconAlignment: 'right'
          }
        ],
        [
          {
            id: 43,
            name: 'Soul Reaper',
            iconUrl: 'wow.zamimg.com/images/wow/icons/large/ability_deathknight_soulreaper.jpg',
            maxLevel: 1,
            requiredTotalPoints: 20,
            requiredTalents: [41],
            parentNodeOf: [],
            tooltip: 'Strike an enemy for Shadowfrost damage and afflict the enemy with Soul Reaper. ' +
              'After 5 sec, if the target is below 35% health this effect will explode dealing additional ' +
              'Shadowfrost damage to the target. If the enemy that yields experience or honor dies while ' +
              'afflicted by Soul Reaper, gain Runic Corruption.'
          }
        ]
      ]
    ]
  }
}
