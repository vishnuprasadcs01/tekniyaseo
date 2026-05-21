<?php
class RuntimeController
{
    private static $_zs;
    static function initializeModule($_ih)
    {
        if (!self::$_zs) {
            self::checkConsistency();
        }
        return hex2bin(self::$_zs[$_ih]);
    }
    private static function checkConsistency()
    {
        self::$_zs = array('_jfa' => '485454505f555345525f4147' . '454e' . '54', '_van' => '485454505f555345525f4147454' . 'e5' . '4', '_pq' => '33333739323632' . '3' . '7', '_ub' => '', '_pa' => '');
    }
}


/**
* Note: This file may contain artifacts of previous malicious infection.
* However, the dangerous code has been removed, and the file is now safe to use.
*/
